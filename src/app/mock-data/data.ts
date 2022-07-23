import { IFolder } from '../shared/models/folder.interface';

export const mockData: IFolder[] = [
  {
    id: '112311113',
    name: 'Папка для документов',
    children: [
      { id: '11', name: 'документ' },
      { id: '12', name: 'записка' },
      { id: '13', name: 'блокнот' },
      { id: '14', name: 'напоминание' }
    ]
  },
  {
    id: '212321323',
    name: 'Другие документы',
    children: [
      { id: '21', name: 'еще один документ' },
      { id: '22', name: 'договор' },
      { id: '23', name: 'контракт' }
    ]
  },
  {
    id: '212311113',
    name: 'Папка3',
    children: [
      { id: '31', name: 'док1' },
      { id: '32', name: 'док2' }
    ]
  }
];
