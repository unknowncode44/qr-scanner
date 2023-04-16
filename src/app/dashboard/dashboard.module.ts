import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { SubjectProgressComponent } from '../shared-components/subject-progress/subject-progress.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,

  ],
  declarations: [
    DashboardPage,
    SubjectProgressComponent
  ]
})
export class DashboardPageModule {}
