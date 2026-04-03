// src/core/tools/toolRegistry.ts
// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Avinash ketkar <
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