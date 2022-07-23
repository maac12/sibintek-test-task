import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

import { FlatNode, TreeNode } from '../../shared/models/ant.models';
import { IFolder } from '../../shared/models/folder.interface';
import { FoldersServices } from '../../shared/services/folders.services';
import { CreateFolderModalComponent } from '../modal/create-folder/create-folder.component';
import { CreateItemModalComponent } from '../modal/create-item/create-item.component';

@Component({
  selector: 'sibintek-folders',
  templateUrl: 'folders.component.html',
  styleUrls: ['folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoldersComponent implements AfterViewInit, OnInit {
  constructor(public foldersService: FoldersServices, private _matDialog: MatDialog) {}
  TREE_DATA: IFolder[] = [];

  ngOnInit(): void {
    this.foldersService.getAll();
    this.foldersService.folders$.subscribe(data => (this.TREE_DATA = data));
    this.dataSource.setData(this.TREE_DATA as TreeNode[]);
  }

  ngAfterViewInit(): void {
    this.treeControl.expandAll();
  }

  setDataToTree(): void {
    this.treeControl.collapseAll();
    setTimeout(() => {
      this.dataSource.setData(this.TREE_DATA as TreeNode[]);
      setTimeout(() => {
        this.treeControl.expandAll();
      }, 500);
    }, 500);
  }

  deleteFolder(node: FlatNode): void {
    this.foldersService.deleteFolder(node.id);
    this.setDataToTree();
  }

  createFolder(): void {
    this._matDialog.open(CreateFolderModalComponent, {
      data: {
        title: 'Папку',
        setDataToTree: this.setDataToTree.bind(this)
      }
    });
  }

  createItem(): void {
    this._matDialog.open(CreateItemModalComponent, {
      data: {
        title: 'Объект',
        setDataToTree: this.setDataToTree.bind(this)
      }
    });
  }

  deleteItem(id: string): void {
    this.foldersService.deleteItem(id);
    this.setDataToTree();
  }

  private transformer = (node: TreeNode, level: number): FlatNode => ({
    id: node.id,
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level
  });

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  getNode(name: string): FlatNode | null {
    return this.treeControl.dataNodes.find(n => n.name === name) || null;
  }
}
