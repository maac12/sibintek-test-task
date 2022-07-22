import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { mockData } from '../../mock-data/data';
import { IFolder } from '../models/folder.interface';

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
        id: '2131231',
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
        if (folder.children.length === 1) folder.children = [];
        folder.children.push({
          id: 'dfdsfsdf',
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

  get folders$(): Observable<IFolder[]> {
    return this.folders.asObservable();
  }
}
