import { useEffect, useRef } from 'react';

function MatrixPanel() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let animationFrame = 0;
    let columns = [];
    const characters = '01010101010100110101001011010101';
    const fontSize = 20;
    let frame = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth || 300;
      const height = parent?.clientHeight || 420;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.ceil(width / fontSize);
      columns = new Array(count).fill(0).map(() => Math.random() * -30);
    };

    const render = () => {
      frame += 1;
      if (frame % 2 !== 0) {
        animationFrame = window.requestAnimationFrame(render);
        return;
      }

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.fillStyle = 'rgba(3, 6, 21, 0.24)';
      context.fillRect(0, 0, width, height);

      context.font = `${fontSize}px Consolas, monospace`;
      context.textAlign = 'center';
      context.shadowBlur = 0;

      columns.forEach((column, index) => {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize + fontSize / 2;
        const y = column * fontSize;

        context.fillStyle = 'rgba(103, 232, 249, 0.82)';
        context.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          columns[index] = Math.random() * -10;
        } else {
          columns[index] += 0.34;
        }
      });

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="matrix-panel">
      <canvas ref={canvasRef} />
      <div className="matrix-panel__scan" />
    </div>
  );
}

export default MatrixPanel;
