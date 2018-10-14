import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnguelementsComponent } from './anguelements.component';

const routes: Routes = [{
  path: 'elements',
  component: AnguelementsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnguelementsRoutingModule { }
