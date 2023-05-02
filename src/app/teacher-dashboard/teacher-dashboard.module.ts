import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeacherDashboardPageRoutingModule } from './teacher-dashboard-routing.module';
import { RolePermissionsDirective } from '../directive/role.permissions.directive';
import { TeacherDashboardPage } from './teacher-dashboard.page';
import { MenuComponent } from '../shared-components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherDashboardPageRoutingModule
  ],
  declarations: [
    TeacherDashboardPage, 
    RolePermissionsDirective, 
    MenuComponent, 
  ]
})
export class TeacherDashboardPageModule {}
