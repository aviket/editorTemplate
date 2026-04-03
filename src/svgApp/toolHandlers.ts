// toolHandlers.ts
export const toolHandlers: Record<string, any> = {
 drawRect: {
  onPointerDown: ({ svg, params }: { svg: SVGElement; params: { width: number; height: number; color: string; } }, e: PointerEvent) => {
    const rect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    rect.setAttribute("x", e.clientX.toString());
    rect.setAttribute("y", e.clientY.toString());
    rect.setAttribute("width", params.width.toString());
    rect.setAttribute("height", params.height.toString());
    rect.setAttribute("fill", params.color);

    svg.appendChild(rect);
  },
}


};