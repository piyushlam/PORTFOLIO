import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function StarField() {
  const ref = useRef();

  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i += 1) {
      const radius = 3.5 + Math.random() * 7.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = radius * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.015;
      ref.current.rotation.y -= delta * 0.03;
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.mouse.x * 0.4, 0.03);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.mouse.y * 0.3, 0.03);
    }
  });

  return (
    <group ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#67e8f9" size={0.03} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

function Nebula() {
  const mesh = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.0015;
      mesh.current.position.x = state.mouse.x * 0.25;
      mesh.current.position.y = state.mouse.y * 0.15;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -3]}>
      <planeGeometry args={[10, 10, 1, 1]} />
      <meshBasicMaterial color="#5b7cff" transparent opacity={0.08} />
    </mesh>
  );
}

function SpaceScene() {
  return (
    <div className="space-scene">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.8]}>
        <color attach="background" args={['#040711']} />
        <fog attach="fog" args={['#040711', 4.5, 16]} />
        <ambientLight intensity={1.1} />
        <Nebula />
        <StarField />
      </Canvas>
    </div>
  );
}

export default SpaceScene;
