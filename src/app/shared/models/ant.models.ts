export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

export interface FlatNode {
  id: string;
  expandable: boolean;
  name: string;
  level: number;
}
