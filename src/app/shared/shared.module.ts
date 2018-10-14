import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from '../modules/core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { GeneralService } from './services/httpcall.service';
import { FilterPipe } from './pipes/filter.pipe';
import {AlwaysAuthGuard} from './auth/auth.service';
import { GroupByPipe } from './pipes/groupby.pipe';
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    LayoutComponent,
    FilterPipe,
    GroupByPipe
  ],
  declarations: [LayoutComponent, FilterPipe,GroupByPipe],
   providers: [GeneralService, AlwaysAuthGuard]
})
export class SharedModule { }
