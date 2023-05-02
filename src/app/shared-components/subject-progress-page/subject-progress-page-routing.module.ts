import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectProgressPagePage } from './subject-progress-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectProgressPagePage
  },
  {
    path: 'seeall/:id',
    loadChildren: () => import('../seeall/seeall.module').then( m => m.SeeallPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectProgressPagePageRoutingModule {
  
}
