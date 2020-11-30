import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { HotelUserComponent } from './hotel-user/hotel-user.component';
import { ContactComponent } from './contact/contact.component';
import { FlightUserComponent } from './flight-user/flight-user.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'user-hotel', component: HotelUserComponent},
  { path: 'user-flights', component: FlightUserComponent},
  { path: 'admin',
    loadChildren: () => import('./adminSection/modules/admin.module').then(m => m.AdminModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: Page404Component}
 ];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
     { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
