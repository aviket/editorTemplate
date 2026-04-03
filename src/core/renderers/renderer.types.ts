export type RendererType = "canvas" | "svg";

export type RendererContext =
  | {
      type: "canvas";
      ctx: CanvasRenderingContext2D;
    }
  | {
      type: "svg";
      svg: SVGSVGElement;
    };