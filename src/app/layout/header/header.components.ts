import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sibintek-header',
  templateUrl: '/header.components.html',
  styleUrls: ['header.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
