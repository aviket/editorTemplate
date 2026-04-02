// store/tool.store.ts
import { create } from "zustand";

export const useToolStore = create((set) => ({
  activeTool: "draw-rect",
  params: {},

  setTool: (toolId: string, defaults = {}) =>
    set({
      activeTool: toolId,
      params: defaults,
    }),

  updateParam: (key: string, value: any) =>
    set((s : { params: Record<string, any> }) => ({
      params: { ...s.params, [key]: value },
    })),
}));