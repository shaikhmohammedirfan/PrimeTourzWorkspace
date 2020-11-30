import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderScrollComponent } from '../components/header-scroll/header-scroll.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderBannerComponent } from '../components/header-banner/header-banner.component';

@NgModule({
  declarations: [
    HeaderScrollComponent,
    FooterComponent,
    HeaderBannerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderScrollComponent,
    HeaderBannerComponent,
    FooterComponent
  ]
})
export class HeaderFooterModule { }
