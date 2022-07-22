import { IFolder } from '../shared/models/folder.interface';

export const mockData: IFolder[] = [
  {
    id: '112313',
    name: 'Папка 3',
    children: [{ name: 'док1' }, { name: 'док2' }]
  },
  {
    id: 'adfa123',
    name: 'Папка 5',
    children: [{ name: 'док4' }, { name: 'док4' }]
  }
];
