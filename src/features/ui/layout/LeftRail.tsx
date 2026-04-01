// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Heusala Group Oy <
// Date: 2024-06-16
// This file is part of the "editor" project.
// You can find more information about this project at:
// src/features/ui/layout/LeftRail.tsx

// import { useToolStore } from "../../../store/tool.store";
import "../../../styles/globals.css";
export function LeftRail() {
  // const setTool = useToolStore((s: any) => s.setTool);

  return (
    <div className="left-rail">
      <button>Select</button>
      <button>Draw</button>
    </div>
  );
}