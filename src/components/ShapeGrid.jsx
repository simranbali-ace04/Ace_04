import { useRef, useEffect } from "react";

const ShapeGrid = ({
  direction = "diagonal",
  speed = 0.3,
  borderColor = "#454040",
  squareSize = 20,
  shape = "hexagon",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;

    const gridOffset = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawHex = (cx, cy, size) => {
      ctx.beginPath();

      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = cx + size * Math.cos(angle);
        const y = cy + size * Math.sin(angle);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.closePath();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const hexHoriz = squareSize * 1.5;
      const hexVert = squareSize * Math.sqrt(3);

      const colShift = Math.floor(gridOffset.x / hexHoriz);

      const offsetX =
        ((gridOffset.x % hexHoriz) + hexHoriz) % hexHoriz;

      const offsetY =
        ((gridOffset.y % hexVert) + hexVert) % hexVert;

      const cols = Math.ceil(canvas.width / hexHoriz) + 3;
      const rows = Math.ceil(canvas.height / hexVert) + 3;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const cx = col * hexHoriz + offsetX;

          const cy =
            row * hexVert +
            ((col + colShift) % 2 !== 0
              ? hexVert / 2
              : 0) +
            offsetY;

          drawHex(cx, cy, squareSize);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      const hexHoriz = squareSize * 1.5;
      const hexVert = squareSize * Math.sqrt(3);

      switch (direction) {
        case "right":
          gridOffset.x =
            (gridOffset.x - speed + hexHoriz * 2) %
            (hexHoriz * 2);
          break;

        case "left":
          gridOffset.x =
            (gridOffset.x + speed + hexHoriz * 2) %
            (hexHoriz * 2);
          break;

        case "up":
          gridOffset.y =
            (gridOffset.y + speed + hexVert) %
            hexVert;
          break;

        case "down":
          gridOffset.y =
            (gridOffset.y - speed + hexVert) %
            hexVert;
          break;

        default:
          gridOffset.x =
            (gridOffset.x - speed + hexHoriz * 2) %
            (hexHoriz * 2);

          gridOffset.y =
            (gridOffset.y - speed + hexVert) %
            hexVert;
      }

      drawGrid();
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [direction, speed, borderColor, squareSize, shape]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
    />
  );
};

export default ShapeGrid;