// src/features/ui/load_tools_fromJson.ts
// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Avinash ketkar <

// import tools from "../../svgApp/tools.json";
import tools from "../../canvasApp/tools.json";
import { registerTool } from "../../core/tools/toolRegistry";
// import { toolHandlers } from "../../svgApp/toolHandlers";
import { toolHandlers } from "../../canvasApp/toolHandlers";

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