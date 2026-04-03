import tools from "./tools.json";
import { registerTool } from "../../core/tools/toolRegistry";
import { toolHandlers } from "./toolHandlers";

export function setupToolsFromJSON() {
  tools.forEach((tool: any) => {
    const handler = toolHandlers[tool.handler];

    if (!handler) {
      console.warn(`Missing handler: ${tool.handler}`);
      return;
    }

    registerTool({
      ...tool,
      ...handler,
    });
  });
}