import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { nanoid } from 'nanoid/non-secure';

import { mockData } from '../../mock-data/data';
import { IFolder, Item } from '../models/folder.interface';

@Injectable({
  providedIn: 'root'
})
export class FoldersServices {
  private readonly folders = new BehaviorSubject<IFolder[]>([]);

  getAll(): void {
    this.folders.next(mockData);
  }

  createFolder(name: string): void {
    let currentValue: IFolder[] = [];
    this.folders.subscribe(data => (currentValue = data));
    currentValue = [
      ...currentValue,
      {
        id: nanoid(),
        name,
        children: [{ name: 'Пустая папка...' }]
      }
    ];
    this.folders.next(currentValue);
  }

  deleteFolder(id: string): void {
    let currentValue: IFolder[] = [];
    this.folders.subscribe(data => (currentValue = data));
    currentValue = currentValue.filter(item => item.id !== id);
    this.folders.next(currentValue);
  }

  createItem(name: string, idFolder: string): void {
    let currentValue: IFolder[] = [];
    this.folders.subscribe(data => (currentValue = data));
    currentValue = currentValue.map(folder => {
      if (folder.id === idFolder) {
        //For delete blank folder name
        if (!folder.children.filter(item => item.id).length) folder.children = [];
        folder.children.push({
          id: nanoid(),
          name
        });
      }
      return folder;
    });
    this.folders.next(currentValue);
  }

  deleteItem(id: string): void {
    let currentValue: IFolder[] = [];
    this.folders.subscribe(data => (currentValue = data));
    currentValue = currentValue.map(folder => {
      let updateChildren = folder.children.filter(children => children.id !== id);
      if (!updateChildren.length) {
        updateChildren.push({
          name: 'Пустая папка...'
        });
      }
      return {
        ...folder,
        children: updateChildren
      };
    });
    this.folders.next(currentValue);
  }

  updateItem(id: string, name: string, newFolderId: string): void {
    let currentValue: IFolder[] = [];
    this.folders.subscribe(data => (currentValue = data));
    let newItemValue: Item;
    currentValue.map(folder => {
      folder.children.map(children => {
        if (children.id === id) {
          return (newItemValue = { ...children, name });
        }
        return;
      });
    });
    this.deleteItem(id);
    this.folders.subscribe(data => (currentValue = data));
    currentValue = currentValue.map(folder => {
      if (folder.id === newFolderId) {
        //For delete blank folder name
        if (!folder.children.filter(item => item.id).length) {
          folder.children = [];
        }
        folder.children.push(newItemValue);
      }
      return folder;
    });
    this.folders.next(currentValue);
  }

  get folders$(): Observable<IFolder[]> {
    return this.folders.asObservable();
  }

  getFolderOfSelectItem(id: string | undefined): IFolder {
    if (!id) console.log('Папка не найдена');
    let currentValue: IFolder[] = [];
    this.folders.subscribe(data => (currentValue = data));
    let folder = currentValue.filter(
      folder => folder.children.filter(item => item.id === id).length
    );
    return folder[0];
  }
}
