import type { ToolDefinition } from "./tool.types";

const registry: Record<string, ToolDefinition> = {};

export function registerTool(tool: ToolDefinition) {
  registry[tool.id] = tool;
}

export function getTool(id: string): ToolDefinition {
  return registry[id];
}

export function getAllTools() {
  return Object.values(registry);
}