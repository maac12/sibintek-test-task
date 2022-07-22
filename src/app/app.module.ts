import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';

import { AppRoutingModule } from './app-routing.module';
import { FoldersComponent } from './components/folders/folders.component';
import { CreateModalComponent } from './components/modal/create-modal.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { AntdModule } from './modules/antd/antd.module';
import { FoldersPageComponent } from './pages/folders.page/folders.page.component';

registerLocaleData(ru);

@NgModule({
  declarations: [FoldersPageComponent, FoldersComponent, CreateModalComponent],
  imports: [
    BrowserModule,
    AntdModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  exports: [FoldersPageComponent],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
