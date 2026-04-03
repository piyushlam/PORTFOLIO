import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, MeshTransmissionMaterial, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';

function HologramCore() {
  const coreRef = useRef();
  const shellRef = useRef();
  const ringARef = useRef();
  const ringBRef = useRef();

  const orbitPoints = useMemo(
    () =>
      new Array(120).fill(0).map((_, index) => {
        const angle = (index / 120) * Math.PI * 2;
        const radius = 1.75 + Math.sin(angle * 3) * 0.04;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius, Math.sin(angle * 2) * 0.08];
      }),
    [],
  );

  const particles = useMemo(() => {
    const pts = new Float32Array(700 * 3);
    for (let i = 0; i < 700; i += 1) {
      const radius = 1.5 + Math.random() * 0.9;
      const angle = Math.random() * Math.PI * 2;
      const spread = (Math.random() - 0.5) * 1.5;
      pts[i * 3] = Math.cos(angle) * radius;
      pts[i * 3 + 1] = spread;
      pts[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pts;
  }, []);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.55;
      coreRef.current.rotation.x += delta * 0.12;
    }
    if (shellRef.current) shellRef.current.rotation.y -= delta * 0.25;
    if (ringARef.current) ringARef.current.rotation.z += delta * 0.45;
    if (ringBRef.current) ringBRef.current.rotation.x -= delta * 0.35;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.9} floatIntensity={1}>
      <Points positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial color="#67e8f9" transparent opacity={0.85} size={0.02} sizeAttenuation depthWrite={false} />
      </Points>

      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.9, 2]} />
        <MeshTransmissionMaterial
          color="#7dd3fc"
          thickness={0.8}
          roughness={0.08}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.06}
          backside
        />
      </mesh>

      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.28, 1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.28} />
      </mesh>

      <mesh ref={ringARef} rotation={[0.2, 0.5, 0]}>
        <torusGeometry args={[1.6, 0.025, 20, 180]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.82} />
      </mesh>

      <mesh ref={ringBRef} rotation={[1.2, 0.15, 0.5]}>
        <torusGeometry args={[1.15, 0.018, 16, 140]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.75} />
      </mesh>

      <Line points={orbitPoints} color="#67e8f9" lineWidth={1.2} transparent opacity={0.7} />
    </Float>
  );
}

function RotatingAvatar() {
  return (
    <div className="avatar-canvas">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 45 }}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[2, 2, 3]} intensity={1.3} color="#ffffff" />
        <directionalLight position={[-3, 1, 2]} intensity={1.1} color="#67e8f9" />
        <pointLight position={[0, 0, 2.2]} intensity={2.4} color="#8b5cf6" />
        <HologramCore />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.9} />
      </Canvas>
    </div>
  );
}

export default RotatingAvatar;
