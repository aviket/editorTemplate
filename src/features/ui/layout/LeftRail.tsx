// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Avinash ketkar <avinash.ketkar@gmail.com>
// Date: April 3, 2026
// This file is part of the "editor" project.
// You can find more information about this project at:
// src/features/ui/layout/LeftRail.tsx


// src/features/ui/layout/LeftRail.tsx

import "../../../styles/globals.css";


import { useToolStore } from "../../../store/tool.store";
// import { getTool } from "../../../core/tools/toolRegistry";
import { getAllTools } from "../../../core/tools/toolRegistry";
import { setupToolsFromJSON } from "../load_tools_fromJson";

setupToolsFromJSON();

export function LeftRail() {
  const setTool = useToolStore((s: any) => s.setTool);

  const tools = getAllTools();
  // print tools to console to verify they are loaded correctly
  // console.log("Registered tools:", tools);
  return (
    <div className="left-rail">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() =>
            setTool(tool.id, getDefaultParams(tool))
          }
        >
          {tool.label}
        </button>
      ))}
    </div>
  );
}
function getDefaultParams(tool: any) {
  if (!tool?.parameters) return {};

  return Object.fromEntries(
    tool.parameters.map((p: any) => [p.id, p.defaultValue])
  );
}