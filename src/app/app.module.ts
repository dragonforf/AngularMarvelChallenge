import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './Characters/characters.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner"
import { TruncatePipe } from './Common/truncate-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from  '@angular/material/dialog'
import { ComicDetailModalComponent } from './Comics/comic-detail.modal.component';
import { CharacterDetailModalComponent } from './Characters/CharacterDetail/character-detail.modal.component';
import { FavouritesComponent } from './Favourites/favourites.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    TruncatePipe,
    ComicDetailModalComponent,
    CharacterDetailModalComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SwiperModule
  ],
  entryComponents:[
    ComicDetailModalComponent,
    CharacterDetailModalComponent
  ],
  providers: [
    {
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
