type IndexResult = {
  nodeMap: Map<string, ToolNode>;
  parentMap: Map<string, string | null>;
};

export function buildIndex(root: ToolNode): IndexResult {
  const nodeMap = new Map<string, ToolNode>();
  const parentMap = new Map<string, string | null>();

  function traverse(node: ToolNode, parentId: string | null) {
    // store node
    nodeMap.set(node.id, node);
    parentMap.set(node.id, parentId);

    // traverse children
    if (node.children) {
      for (const child of node.children) {
        traverse(child, node.id);
      }
    }
  }

  traverse(root, null);

  return { nodeMap, parentMap };
}

export function getNodeById(
  nodeMap: Map<string, ToolNode>,
  id: string
): ToolNode | undefined {
  return nodeMap.get(id);
}

export function getChildren(
  nodeMap: Map<string, ToolNode>,
  id: string
): ToolNode[] {
  const node = nodeMap.get(id);

  if (!node || !node.children) {
    return [];
  }

  return node.children;
}

export function getParent(
  nodeMap: Map<string, ToolNode>,
  parentMap: Map<string, string | null>,
  id: string
): ToolNode | null {
  const parentId = parentMap.get(id);
  if (!parentId) return null;

  return nodeMap.get(parentId) || null;
}

export type ToolNode = {
  id: string;
  label: string;
  type: "group" | "tool";
  icon?: string;
  handler?: string;
  parameters?: any[];
  children?: ToolNode[];
};