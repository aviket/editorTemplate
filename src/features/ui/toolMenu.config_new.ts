import { registerTool } from "../../core/tools/toolRegistry";

export default function setupTools() {
registerTool({
  id: "draw-rect",
  label: "Rectangle",
  parameters: [
    { id: "width", label: "Width", type: "number", defaultValue: 100 },
    { id: "height", label: "Height", type: "number", defaultValue: 80 },
    { id: "color", label: "Color", type: "string", defaultValue: 'red' },
  ],
  onPointerDown: ({ ctx, params }, e) => {
    ctx.fillStyle = params.color;
    ctx.fillRect(e.clientX, e.clientY, params.width, params.height);
  },
});

registerTool({
  id: "draw-circle",
  label: "Circle",
  parameters: [
    { id: "radius", type: "number", label: "Radius", defaultValue: 40 },
    {
      id: "fill",
      type: "select",
      label: "Fill",
      defaultValue: "blue",
      options: [
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" },
      ],
    },
  ],
  onPointerDown: ({ ctx, params }, e) => {
    ctx.fillStyle = params.fill;
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, params.radius, 0, Math.PI * 2);
    ctx.fill();
  },
});

registerTool({
  id: "debug-tool",
  label: "Debug",
  parameters: [
    { id: "enabled", type: "boolean", label: "Enabled", defaultValue: true },
    { id: "text", type: "string", label: "Label", defaultValue: "Hello" },
  ],
});
}