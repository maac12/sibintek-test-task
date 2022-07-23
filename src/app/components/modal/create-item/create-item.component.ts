import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FoldersServices } from '../../../shared/services/folders.services';

@Component({
  selector: 'sibintek-create-folder-modal',
  templateUrl: 'create-item.component.html',
  styleUrls: ['create-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateItemModalComponent {
  form: FormGroup;

  constructor(
    public matDialogRef: MatDialogRef<CreateItemModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { title: string; setDataToTree: () => void },
    public foldersService: FoldersServices,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      folderId: ['', [Validators.required]]
    });
  }

  create(): void {
    this.foldersService.createItem(this.form.value.name, this.form.value.folderId);
    this.data.setDataToTree();
    this.matDialogRef.close();
  }

  close(): void {
    this.matDialogRef.close();
  }
}
