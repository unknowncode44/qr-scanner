import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubjectProgressPagePageRoutingModule } from './subject-progress-page-routing.module';
import { SubjectProgressPagePage } from './subject-progress-page.page';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectProgressPagePageRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#fff",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [
    SubjectProgressPagePage,
    ],

})
export class SubjectProgressPagePageModule {
  
}
