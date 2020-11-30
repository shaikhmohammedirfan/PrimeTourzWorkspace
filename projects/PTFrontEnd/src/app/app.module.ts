import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderFooterModule } from './shared/modules/header-footer.module';
import { SharedModule } from './shared/modules/shared.module';
import { ContactComponent } from './contact/contact.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HotelUserComponent } from './hotel-user/hotel-user.component';
import { FlightUserComponent } from './flight-user/flight-user.component';
import { APIsService } from './services/APIs/apis.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RegisterUserComponent,
    HotelUserComponent,
    FlightUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderFooterModule,
    SharedModule


  ],
  providers: [APIsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
