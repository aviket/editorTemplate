import tools from "../../canvasApp/tools.json";
import { registerTool } from "../../core/tools/toolRegistry";
import { toolHandlers } from "../../canvasApp/toolHandlers";

function processNode(node: any) {
  console.log("Processing node:", node);
  if (node.type === "group") {
    node.children?.forEach(processNode);
    return;
  }

  if (node.type === "tool") {
    const handler = toolHandlers[node.handler];

    if (!handler) {
      console.warn(`Missing handler: ${node.handler}`);
      return;
    }

    registerTool({
      ...node,
      ...handler,
    });
  }
}

export function setupToolsFromJSON() {
  tools.forEach(processNode);
}