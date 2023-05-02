import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeallPageRoutingModule } from './seeall-routing.module';

import { SeeallPage } from './seeall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeallPageRoutingModule
  ],
  declarations: [SeeallPage]
})
export class SeeallPageModule {}
