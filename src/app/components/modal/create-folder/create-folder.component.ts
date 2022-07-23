import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FoldersServices } from '../../../shared/services/folders.services';

@Component({
  selector: 'sibintek-create-folder-modal',
  templateUrl: 'create-folder.component.html',
  styleUrls: ['create-folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFolderModalComponent {
  form: FormGroup;

  constructor(
    public matDialogRef: MatDialogRef<CreateFolderModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { title: string; setDataToTree: () => void },
    public foldersService: FoldersServices,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  create(): void {
    this.foldersService.createFolder(this.form.value.name);
    this.data.setDataToTree();
    this.matDialogRef.close();
  }

  close(): void {
    this.matDialogRef.close();
  }
}
