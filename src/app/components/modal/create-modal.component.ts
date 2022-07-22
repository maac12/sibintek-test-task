import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sibintek-create-modal',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateModalComponent {}
