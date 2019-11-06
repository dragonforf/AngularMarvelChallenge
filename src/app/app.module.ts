import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './Characters/characters.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner"
import { TruncatePipe } from './Common/truncate-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
