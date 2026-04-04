import { useState } from "react";
import rawtree from "../../../canvasApp/tools.json";
import {
  buildIndex,
  type ToolNode,
  getChildren
} from "../../../canvasApp/jsonTreeutils";
import { iconMap } from "../../../core/iconMap";
import { toolHandlers } from "../../../core/tools/toolhandlers";

const tree: ToolNode = rawtree[0] as ToolNode;
const { nodeMap } = buildIndex(tree);

export function LeftRail() {
  const rootChildren = getChildren(nodeMap, "root");


  const [menuStack, setMenuStack] = useState<
  { node: ToolNode; position: { x: number; y: number } }[]
>([]);
 

  function handleRootHover(
  node: ToolNode,
  event: React.MouseEvent<HTMLButtonElement>
) {
  if (node.type !== "group") return;

  const rect = event.currentTarget.getBoundingClientRect();

  setMenuStack([
    {
      node,
      position: {
        x: rect.right + 8,
        y: rect.top
      }
    }
  ]);
}

function handleSubHover(
  level: number,
  node: ToolNode,
  event: React.MouseEvent<HTMLButtonElement>
) {
  if (node.type !== "group") {
    // trim deeper levels
    setMenuStack((prev) => prev.slice(0, level + 1));
    return;
  }

  const rect = event.currentTarget.getBoundingClientRect();

  setMenuStack((prev) => {
    const newStack = prev.slice(0, level + 1);

    newStack.push({
      node,
      position: {
        x: rect.right + 8,
        y: rect.top
      }
    });

    return newStack;
  });
}

function handleMenuLeave(
  e: React.MouseEvent<HTMLDivElement>,
  level: number
) {
  const next = e.relatedTarget as HTMLElement | null;

  // If moving into another floating menu → DO NOTHING
  if (next && next.closest(".floating-menu")) {
    return;
  }

  // Otherwise close this level and deeper
  setTimeout(() => {
    setMenuStack((prev) => prev.slice(0, level));
  }, 120);
}

  return (
    <div className="left-rail">
{rootChildren.map((node) => (
  <button
    key={node.id}
    title={node.label}
    onMouseEnter={(e) => handleRootHover(node, e)}
  >

    {iconMap[node.icon || ""] ?? node.label[0]}
                {node.type === "group" && (
          <span className="menu-arrow">▶</span>
        )}
  </button>
))}

     {menuStack.map((menu, level) => (
  <div
    key={menu.node.id}
    className="floating-menu"
    style={{
      position: "fixed",
      top: menu.position.y,
      left: menu.position.x
    }}
onMouseLeave={(e) => handleMenuLeave(e, level)}
  >
    {getChildren(nodeMap, menu.node.id).map((child) => (
      <button
        key={child.id}
        title={child.label}
        // className="menu-item"
        onMouseEnter={(e) => handleSubHover(level, child, e)}
       onClick={() => {
  if (child.type === "tool" && child.handler) {
    const handlerFn = toolHandlers[child.handler];

    if (!handlerFn) {
      console.warn("Handler not found:", child.handler);
      return;
    }

    handlerFn(child.parameters); // pass params if needed
  }
}}
      >
        {/* <span className="menu-icon"> */}
          {iconMap[child.icon || ""] ?? "•"}
        {/* </span> */}

        {/* <span className="menu-label">{child.label}</span> */}

        {child.type === "group" && (
          <span className="menu-arrow">▶</span>
        )}

        {child.type === "tool" && (
          <span className="menu-shortcut">⌘</span>
        )}

        
      </button>
    ))}
  </div>
))}
    </div>
  );
}