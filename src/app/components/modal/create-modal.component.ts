import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FoldersServices } from '../../shared/services/folders.services';

@Component({
  selector: 'sibintek-create-modal',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateModalComponent {
  value = '';
  constructor(
    public matDialogRef: MatDialogRef<CreateModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { title: string; setDataToTree: () => void },
    public foldersService: FoldersServices
  ) {}

  create(name: string): void {
    this.foldersService.createFolder(name);
    this.data.setDataToTree();
    this.matDialogRef.close();
  }

  close(): void {
    this.matDialogRef.close();
  }
}
