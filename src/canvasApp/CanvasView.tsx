// src/features/editor/components/CanvasView.tsx
// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Avinash ketkar <
import { useRef, useEffect } from "react";
import { useToolStore } from "../store/tool.store";
import { getTool } from "../core/tools/toolRegistry";

export function CanvasView() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tool = useToolStore((s: any) => s.activeTool);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const activeTool = useToolStore((s: any) => s.activeTool);
  const params = useToolStore((s: any) => s.params);
  console.log("Active tool:", tool);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctxRef.current = canvas.getContext("2d")!;



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
   const tool = getTool(activeTool);

  tool?.onPointerDown?.(
    {
      ctx: ctxRef.current,
      params,
    },
    e
  );
};

const handlePointerMove = (e: React.PointerEvent) => {
  const tool = getTool(activeTool);

  tool?.onPointerMove?.(
    {
      ctx: ctxRef.current,
      params,
    },
    e
  );
};

const handlePointerUp = (e: React.PointerEvent) => {
  const tool = getTool(activeTool);

  tool?.onPointerUp?.(
    {
      ctx: ctxRef.current,
      params,
    },
    e
  );
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
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    />
  );
}