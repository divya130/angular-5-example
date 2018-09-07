import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from '../modules/core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [LayoutComponent],
   providers: []
})
export class SharedModule { }
