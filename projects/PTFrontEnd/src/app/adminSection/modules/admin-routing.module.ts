import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from '../components/core/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from '../components/core/admin-home/admin-home.component';
import { Admin404Component } from '../components/core/admin404/admin404.component';
import { ManageHotelsComponent } from '../components/feature/manage-hotels/manage-hotels.component';

const routes: Routes = [
  {path: '', component: AdminHomeComponent,
  children: [
    {path: '', component: AdminDashboardComponent},
    { path: 'manage-hotels', component: ManageHotelsComponent},
    { path: 'manage-properties',
    loadChildren: () => import('../components/feature/manage-properties/manage-properties.module').then(m => m.ManagePropertiesModule)}
  ]
},
{ path: '',   redirectTo: '/admin', pathMatch: 'full' },
{ path: '**', component: Admin404Component  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
