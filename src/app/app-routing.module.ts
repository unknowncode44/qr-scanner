import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guard/user.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [UserGuard] //* Ruta protegida por el GUARD, usamos cookies
  },
  {
    path: 'teacher-dashboard',
    loadChildren: () => import('./teacher-dashboard/teacher-dashboard.module').then( m => m.TeacherDashboardPageModule)
  },
  {
    path: 'subject-progress-page',
    loadChildren: () => import('./shared-components/subject-progress-page/subject-progress-page.module').then( m => m.SubjectProgressPagePageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./shared-components/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'seeall',
    loadChildren: () => import('./shared-components/seeall/seeall.module').then( m => m.SeeallPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
