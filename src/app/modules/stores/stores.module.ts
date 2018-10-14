import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

@NgModule({
  imports: [
    CommonModule,
    StoresRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [StoresComponent]
})
export class StoresModule { }
