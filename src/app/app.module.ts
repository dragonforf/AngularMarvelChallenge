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

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    TruncatePipe,
    ComicDetailModalComponent,
    CharacterDetailModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents:[
    ComicDetailModalComponent,
    CharacterDetailModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
