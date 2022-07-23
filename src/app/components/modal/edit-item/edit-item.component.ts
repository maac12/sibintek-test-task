import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Item } from '../../../shared/models/folder.interface';
import { FoldersServices } from '../../../shared/services/folders.services';
import { CreateItemModalComponent } from '../create-item/create-item.component';

@Component({
  selector: 'sibintek-edit-item-modal',
  templateUrl: 'edit-item.component.html',
  styleUrls: ['edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  form: FormGroup;
  constructor(
    public matDialogRef: MatDialogRef<CreateItemModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { item: Item; setDataToTree: () => void },
    public foldersService: FoldersServices,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      folderId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.data.item.name, [Validators.required]],
      folderId: [
        this.foldersService.getFolderOfSelectItem(this.data.item.id).id,
        [Validators.required]
      ]
    });
  }

  edit(): void {
    if (!this.data.item.id) {
      console.log('Объект не найден');
      return;
    }
    this.foldersService.updateItem(
      this.data.item.id,
      this.form.value.name,
      this.form.value.folderId
    );
    this.data.setDataToTree();
    this.matDialogRef.close();
  }

  close(): void {
    this.matDialogRef.close();
  }
}
