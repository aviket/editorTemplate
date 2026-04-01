// store/tool.store.ts
import { create } from "zustand";

export const useToolStore = create((set) => ({
  activeTool: "select",

  setTool: (tool: string) => set({ activeTool: tool }),
}));