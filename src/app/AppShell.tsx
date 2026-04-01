// Copyright (c) 2024. Heusala Group Oy <
// All rights reserved.
// This software may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// Author: Heusala Group Oy <
// Date: 2024-06-16
// This file is part of the "editor" project.
// You can find more information about this project at:
// src/app/AppShell.tsx
import { TopBar } from "../features/ui/layout/TopBar";
import { LeftRail } from "../features/ui/layout/LeftRail";
import { RightInspector } from "../features/ui/layout/RightInspector";
import { EditorRoot } from "../features/editor/components/EditorRoot";
import "../styles/globals.css";
export function AppShell() {
  return (
    <div className="app-shell">
      <TopBar />
      <LeftRail />
      <EditorRoot />
      <RightInspector />
    </div>
  );
}