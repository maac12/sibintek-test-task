import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntdModule } from '../modules/antd/antd.module';
import { HeaderComponent } from './header/header.components';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [AntdModule, CommonModule, RouterModule],
  providers: [],
  exports: [HeaderComponent]
})
export class LayoutModule {}
