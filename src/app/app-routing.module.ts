
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';



const appRouter: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
      path: '',
      component: LayoutComponent,
      children:[
          {
          path: '',
          loadChildren: './modules/home/home.module#HomeModule'
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{};
