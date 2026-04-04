// src/icons/iconMap.ts

import { createElement } from "react";
import type { ReactNode } from "react";
import { Circle } from "lucide-react";
import { Square } from "lucide-react";
// import more as needed

export const iconMap: Record<string, ReactNode> = {
  circle: createElement(Circle, { size: 18 }),
  square: createElement(Square, { size: 18 }),
};