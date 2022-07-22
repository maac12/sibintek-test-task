import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoldersPageComponent } from './pages/folders.page/folders.page.component';

const routes: Routes = [
  {
    path: '',
    component: FoldersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
