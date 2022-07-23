export interface IFolder {
  id?: string | number;
  name: string;
  children: Item[];
}

export interface Item {
  id?: string;
  name: string;
}
