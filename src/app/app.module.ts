import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XkcdService } from './services/xkcd.service';
import { HeaderComponent } from './components/header/header.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ComicComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [XkcdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
