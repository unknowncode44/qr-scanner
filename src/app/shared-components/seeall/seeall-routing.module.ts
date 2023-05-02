import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeallPage } from './seeall.page';

const routes: Routes = [
  {
    path: '',
    component: SeeallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeallPageRoutingModule {}
