import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectProgressPagePage } from './subject-progress-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectProgressPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectProgressPagePageRoutingModule {}
