// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Avinash ketkar <avinash.ketkar@gmail.com>
// Date: April 3, 2026
// This file is part of the "editor" project.
// You can find more information about this project at:
// src/features/ui/layout/RightInspector.tsx
import { useToolStore } from "../../../store/tool.store";
import {getTool } from "../../../core/tools/toolRegistry";

export function RightInspector() {
  const activeTool = useToolStore((s : any) => s.activeTool);
  const params = useToolStore((s : any) => s.params);
  const updateParam = useToolStore((s : any) => s.updateParam);

  const tool = getTool(activeTool);

  if (!tool?.parameters) return <div className="right-panel" />;

  return (
    <div className="right-panel">
      <h4>{tool.label}</h4>

      {tool.parameters.map((p) => (
        <div key={p.id}>
          <label>{p.label}</label>

  {renderInput(
  p,
  params[p.id] ?? p.defaultValue,
  updateParam
)}
        </div>
      ))}
    </div>
  );
}



function renderInput(p: any, value: any, updateParam: any) {
  switch (p.type) {
    case "number":
      return (
        <input
          type="number"
          value={value}
          min={p.min}
          max={p.max}
          step={p.step}
          onChange={(e) =>
            updateParam(p.id, Number(e.target.value))
          }
        />
      );

    case "string":
      return (
        <input
          type="text"
          value={value}
          placeholder={p.placeholder}
          onChange={(e) =>
            updateParam(p.id, e.target.value)
          }
        />
      );

    case "boolean":
      return (
        <input
          type="checkbox"
          checked={!!value}
          onChange={(e) =>
            updateParam(p.id, e.target.checked)
          }
        />
      );

    case "select":
      return (
        <select
          value={value}
          onChange={(e) =>
            updateParam(p.id, e.target.value)
          }
        >
          {p.options.map((opt: any) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );

    default:
      return <div>Unsupported param type: {p.type}</div>;
  }
}

