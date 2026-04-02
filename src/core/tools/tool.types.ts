export type ToolParameter =
  | NumberParam
  | StringParam
  | BooleanParam
  | SelectParam;

type BaseParam = {
  id: string;
  label: string;
  defaultValue?: any;

  // UI override hook
  component?: string; // custom renderer key
};

type NumberParam = BaseParam & {
  type: "number";
  min?: number;
  max?: number;
  step?: number;
};

type StringParam = BaseParam & {
  type: "string";
  placeholder?: string;
};

type BooleanParam = BaseParam & {
  type: "boolean";
};

type SelectParam = BaseParam & {
  type: "select";
  options: { label: string; value: any }[];
};

export type ToolDefinition = {
  id: string;
  label: string;

  // UI config
  parameters?: ToolParameter[];

  // behavior
  onPointerDown?: (ctx: any, e: any) => void;
  onPointerMove?: (ctx: any, e: any) => void;
  onPointerUp?: (ctx: any, e: any) => void;
};