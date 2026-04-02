# 🧩 Editor Framework Template (React + TypeScript)

A modular, extensible **editor framework template** built with **React**, **TypeScript**, and **Zustand**.

> ⚠️ The current canvas implementation is only a placeholder.  
> This framework is designed to be adapted into **any kind of editor**:
>
> - 🎨 Canvas-based editors
> - 🖼 SVG editors
> - 📝 Rich text / document editors
> - 🧱 Layout builders
> - 🧩 Low-code / no-code tools

---

## 🚀 Purpose

This project provides a **foundation architecture** for building editor-style applications with:

- Tool-driven interactions
- Dynamic inspector panels
- Pluggable behaviors
- Schema-driven UI

---

## 🏗 Architecture Overview

```

AppShell
├── TopBar
├── LeftRail (Tool Selection)
├── EditorRoot
│ └── View Layer (Canvas / SVG / DOM / etc.)
└── RightInspector (Dynamic Params UI)

````id="b6j4pf"

---

## 🧠 Core Philosophy

> **Tools define behavior.  
> Schema defines UI.  
> Renderer defines output.**

This separation allows the same system to power different types of editors.

---

## 🧩 Core Concepts

### 1. Tool System

Tools encapsulate behavior and configuration:

```ts
registerTool({
  id: "example-tool",
  label: "Example",
  parameters: [...],
  onPointerDown: (ctx, e) => {}
});
````

Tools are:

* Self-contained
* Pluggable
* UI-driven via schema

---

### 2. Tool Parameters (Schema-driven UI)

Supported parameter types:

| Type    | UI Component |
| ------- | ------------ |
| number  | Number input |
| string  | Text input   |
| boolean | Checkbox     |
| select  | Dropdown     |

Example:

```ts id="t3wq2e"
{
  id: "size",
  type: "number",
  label: "Size",
  defaultValue: 10
}
```

---

### 3. Tool Registry (Plugin System)

Central registry:

```ts id="4f2k1p"
registerTool(tool);
getTool(id);
getAllTools();
```

Enables:

* Dynamic discovery
* External tool loading
* Plugin-style architecture

---

### 4. State Management (Zustand)

```ts id="u8w3mn"
activeTool: string;
params: Record<string, any>;
```

Handles:

* Active tool switching
* Parameter updates
* UI synchronization

---

### 5. Dynamic Inspector (Right Panel)

The inspector UI is generated from tool schema:

```ts id="x9z2pl"
switch (param.type) {
  case "number": ...
  case "string": ...
  case "boolean": ...
  case "select": ...
}
```

---

### 6. View Layer (Replaceable)

The current implementation uses a `<canvas>`:

```tsx
<CanvasView />
```

⚠️ This is **only a placeholder**

You can replace it with:

* SVG renderer
* DOM-based editor (contentEditable)
* WebGL / Three.js
* Custom rendering engine

---

## 🧪 Example Tools

### Rectangle Tool (Canvas Example)

```ts id="r4d9kl"
registerTool({
  id: "draw-rect",
  label: "Rectangle",
  parameters: [
    { id: "width", type: "number", defaultValue: 100 },
    { id: "height", type: "number", defaultValue: 80 },
    { id: "color", type: "string", defaultValue: "red" }
  ]
});
```

---

### Debug Tool (UI Testing)

```ts id="m2q7zx"
registerTool({
  id: "debug-tool",
  label: "Debug",
  parameters: [
    { id: "enabled", type: "boolean", defaultValue: true },
    { id: "text", type: "string", defaultValue: "Hello" }
  ]
});
```

---

## 🔄 How It Works

1. Tools are registered via `registerTool()`
2. UI discovers tools dynamically
3. Selecting a tool initializes parameters
4. Inspector renders inputs based on schema
5. View layer executes tool behavior

---

## 📁 Project Structure

```id="w8f3lp"
src/
├── core/tools/
│   ├── tool.types.ts
│   ├── toolRegistry.ts
│
├── features/
│   ├── editor/
│   │   ├── CanvasView.tsx   // Replaceable
│   │   ├── EditorRoot.tsx
│   │
│   ├── ui/layout/
│       ├── LeftRail.tsx
│       ├── RightInspector.tsx
│       ├── TopBar.tsx
│
├── store/
│   ├── tool.store.ts
│
├── app/
│   ├── AppShell.tsx
```

---

## ⚠️ Current Limitations

* Canvas is only a placeholder renderer
* No scene graph or document model
* No undo/redo system
* Limited parameter types
* No persistence layer

---

## 🔮 Future Extensions

* 🧱 Abstract rendering layer (Canvas / SVG / DOM interchangeable)
* 📦 External tool plugins (JSON or remote)
* 🎨 Advanced input types (color, vector, gradients)
* 🧠 Scene/document model
* ↩️ Undo / Redo system
* ⌨️ Keyboard shortcuts
* 🧩 Component-based tool UI

---

## 🛠 Setup

```bash id="k1z7xr"
npm install
npm run dev
```

---

## 💡 Use Cases

This template can be adapted to build:

* 🎨 Drawing tools
* 📝 Document editors
* 🧱 Page/layout builders
* 🧩 Low-code platforms
* 📊 Visual data editors

---

## 🤝 Contributing

This is a foundational template — contributions are welcome for:

* New tool types
* Better rendering abstractions
* Plugin system improvements

---

## 📄 License

MIT License

---

## ⚡ Summary

This project is a:

> 🧠 **Reusable Editor Engine Template**

Not tied to any specific rendering technology,
but designed to support **any interactive editing environment**.

```

---

