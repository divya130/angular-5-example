import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from '../modules/core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { GeneralService } from './services/httpcall.service';
import { FilterPipe } from './pipes/filter.pipe';
import { PipedemoPipe } from './pipedemo.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    LayoutComponent,
    FilterPipe
  ],
  declarations: [LayoutComponent, FilterPipe, PipedemoPipe],
   providers: [GeneralService]
})
export class SharedModule { }
