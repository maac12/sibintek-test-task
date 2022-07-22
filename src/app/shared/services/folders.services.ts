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

  deleteFolder(id: string): void {
    let currentValue: IFolder[] = [];
    this.folders.subscribe(data => (currentValue = data));
    currentValue = currentValue.filter(item => item.id !== id);
    this.folders.next(currentValue);
  }

  get folders$(): Observable<IFolder[]> {
    return this.folders.asObservable();
  }
}
