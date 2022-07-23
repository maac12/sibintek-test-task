import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sibintek-header',
  templateUrl: '/header.components.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
