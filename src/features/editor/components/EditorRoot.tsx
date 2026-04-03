// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Avinash ketkar <avinash.ketkar@gmail.com>
// Date: April 3, 2026
// This file is part of the "editor" project.
// You can find more information about this project at:
// src/features/editor/components/EditorRoot.tsx
// EditorRoot.tsx
import { CanvasView } from "../../../canvasApp/CanvasView";
//import { SVGView } from "../../../svgApp/SvgView";

export function EditorRoot() {
  return (
    <div className="editor">
      {/* <SVGView /> */}
      <CanvasView />
    </div>
  );
}