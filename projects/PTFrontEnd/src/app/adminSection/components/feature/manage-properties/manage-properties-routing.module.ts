import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePropertiesComponent } from './manage-properties.component';

const routes: Routes = [
  {path: '', component: ManagePropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePropertiesRoutingModule { }
