// toolHandlers.ts
export const toolHandlers: Record<string, any> = {
  drawRect: {
    onPointerDown: (
      { ctx, params }: { ctx: CanvasRenderingContext2D; params: any },
      e: PointerEvent
    ) => {
      ctx.fillStyle = params.color;
      ctx.fillRect(e.clientX, e.clientY, params.width, params.height);
    },
  },

  drawCircle: {
    onPointerDown: (
      { ctx, params }: { ctx: CanvasRenderingContext2D; params: any },
      e: PointerEvent
    ) => {
      ctx.fillStyle = params.fill;
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, params.radius, 0, Math.PI * 2);
      ctx.fill();
    },
  },
};