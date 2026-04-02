import { getAllTools } from "../../core/tools/toolRegistry";

// create a menu config based on registered tools
// this decouples the UI from the tool implementation and allows for dynamic menus

export const toolMenu = getAllTools().map((tool) => ({
  id: tool.id,
    label: tool.label,
    type: "action",
    
}));



// export const toolMenu = [
//   {
//     id: "select",
//     label: "Select",
//     type: "action",
//   },
//   {
//     id: "draw",
//     label: "Draw",
//     type: "group",
//     children: [
//       { id: "draw-rect", label: "Rectangle" },
//       { id: "draw-circle", label: "Circle" },
//     ],
//   },
// ];