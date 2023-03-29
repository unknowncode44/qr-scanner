import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HideShowComponent } from './hide-show/hide-show.component';



@NgModule({
  declarations: [
    HideShowComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HideShowComponent
  ]
})
export class ComponentsModule { }
