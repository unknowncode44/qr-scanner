import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHomePageRoutingModule } from './admin-home-routing.module';

import { AdminHomePage } from './admin-home.page';
import { FilterPipe } from 'src/app/helpers/filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomePageRoutingModule,
    CommonModule,
  ],
  declarations: [AdminHomePage, FilterPipe],
  exports: [FilterPipe]
})
export class AdminHomePageModule {}
