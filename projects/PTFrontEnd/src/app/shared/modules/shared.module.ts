import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelSearchComponent } from '../components/hotel-search/hotel-search.component';
import { MaterialModule } from './material.module';
import { HotelCarouselComponent } from '../components/hotel-carousel/hotel-carousel.component';
import { NotifierComponent } from '../components/notifier/notifier.component';
import { SearchFormComponent } from '../components/hotel-search/search-form/search-form.component';
import { HotelCardComponent } from '../components/hotel-search/hotel-card/hotel-card.component';
import { PropertyCardComponent } from '../components/hotel-search/property-card/property-card.component';
import { HeaderFooterModule } from './header-footer.module';




@NgModule({
  declarations: [
    HotelSearchComponent,
    HotelCarouselComponent,
    NotifierComponent,
    SearchFormComponent,
    HotelCardComponent,
    PropertyCardComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderFooterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HotelSearchComponent,
    HotelCarouselComponent


  ]
})
export class SharedModule { }
