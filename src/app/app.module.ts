import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DefaultPageComponent } from './home/default-page/default-page.component';
import { GameDetailsComponent } from './home/game-details/game-details.component';
import { GameListComponent } from './home/game-list/game-list.component';
import { GameCardComponent } from './home/game-list/game-card/game-card.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './services/game.service';
import { GameDataService } from './services/game-data.service';
import { ShortenPipe } from './pipes/shorten.pipe';
import { LoaderComponent } from './shared/loader/loader.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultPageComponent,
    GameDetailsComponent,
    GameListComponent,
    GameCardComponent,
    LoaderComponent,
    ShortenPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [GameService,GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
