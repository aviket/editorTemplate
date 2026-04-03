// src/features/editor/components/CanvasView.tsx
// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Avinash ketkar <
import { useRef } from "react";
import { useToolStore } from "../store/tool.store";
import { getTool } from "../core/tools/toolRegistry";

export function SVGView() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const activeTool = useToolStore((s: any) => s.activeTool);
  const params = useToolStore((s: any) => s.params);

  const handlePointerDown = (e: React.PointerEvent) => {
    const tool = getTool(activeTool);

    tool?.onPointerDown?.(
      {
        svg: svgRef.current,
        params,
      },
      e
    );
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      onPointerDown={handlePointerDown}
      style={{ background: "#111" }}
    />
  );
}