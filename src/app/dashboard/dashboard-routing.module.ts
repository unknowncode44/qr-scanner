import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'subject-progress-page/:id',
    loadChildren: () => import('../shared-components/subject-progress-page/subject-progress-page.module').then( m => m.SubjectProgressPagePageModule),
  },
  {
    path: 'seeall',
    loadChildren: () => import('../shared-components/seeall/seeall.module').then( m => m.SeeallPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
