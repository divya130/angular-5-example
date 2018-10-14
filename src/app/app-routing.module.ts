
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AlwaysAuthGuard } from './shared/auth/auth.service';


const appRouter: Routes = [
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
      path: '',
      component: LayoutComponent,
      canActivate: [AlwaysAuthGuard],
      children:[
          {
          path: '',
          loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: '',
        loadChildren: './modules/users/users.module#UsersModule'
    },{
      path: '',
      loadChildren: './modules/anguelements/anguelements.module#AnguelementsModule'
  },{
    path: '',
    loadChildren: './modules/pipes/pipes.module#PipesModule'
},{
  path: '',
  loadChildren: './modules/stores/stores.module#StoresModule'
}
]
  },
 
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
