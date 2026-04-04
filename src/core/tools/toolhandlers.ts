// src/canvasApp/toolHandlers.ts

export const toolHandlers: Record<string, Function> = {
  drawRect: (params?: any) => {
    console.log("Drawing rectangle", params);
  },

  drawCircle: (params?: any) => {
    console.log("Drawing circle", params);
  }
};