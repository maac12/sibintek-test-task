export interface IFolder {
  id?: string | number;
  name: string;
  children: Item[];
}

interface Item {
  id?: string | number;
  name: string;
}
