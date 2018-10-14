import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnguelementsRoutingModule } from './anguelements-routing.module';
import { AnguelementsComponent } from './anguelements.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    AnguelementsRoutingModule
  ],
  declarations: [AnguelementsComponent, ChildComponent]
})
export class AnguelementsModule { }
