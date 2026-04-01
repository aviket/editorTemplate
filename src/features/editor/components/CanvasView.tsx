// features/editor/components/CanvasView.tsx
import { useRef, useEffect } from "react";
import { useToolStore } from "../../../store/tool.store";
export function CanvasView() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tool = useToolStore((s: any) => s.activeTool);
  console.log("Active tool:", tool);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      // Set internal resolution
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Clear + redraw
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw test rectangle
      ctx.fillStyle = "red";
      ctx.fillRect(50, 50, 100, 100);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

const handlePointerDown = (e: React.PointerEvent) => {
  console.log("Pointer down", e.clientX, e.clientY);
};

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
        style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "block", // removes inline spacing issues
      }}
    />
  );
}