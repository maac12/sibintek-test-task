import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CounterComponent } from '../components/counter/counter.component';
import { AntdModule } from '../modules/antd/antd.module';
import { HeaderComponent } from './header/header.components';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, CounterComponent],
  imports: [AntdModule, CommonModule, RouterModule],
  providers: [],
  exports: [HeaderComponent]
})
export class LayoutModule {}
