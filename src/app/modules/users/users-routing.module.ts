import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [{
  path: 'users',
  component: UserlistComponent
}, {
  path: 'user/:id',
  component: UserdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
