import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { SharedModule } from '../../shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PaginationModule.forRoot()
  ],
  declarations: [UserdetailsComponent, EdituserComponent, UserlistComponent]
})
export class UsersModule {
}
