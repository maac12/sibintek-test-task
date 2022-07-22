import { IFolder } from '../shared/models/folder.interface';

export const mockData: IFolder[] = [
  {
    id: '112313',
    name: 'Папка 3',
    children: [
      { id: '11', name: 'док1' },
      { id: '12', name: 'док2' }
    ]
  },
  {
    id: 'adfa123',
    name: 'Папка 5',
    children: [
      { id: '13', name: 'док4' },
      { id: '14', name: 'док4' }
    ]
  }
];
