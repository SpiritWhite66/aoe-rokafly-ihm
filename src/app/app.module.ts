import { LobbyModule } from './lobby/lobby.module';
import { MenuModule } from './menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LobbySearchModule } from './lobby-search/lobby-search.module';
import { LobbySearchComponent } from './lobby-search/lobby-search.component';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenuModule,
    LobbySearchModule,
    LobbyModule,
    RouterModule.forRoot([
      { path: '', component: LobbySearchComponent },
      { path: 'lobby/:match_id', component: LobbyComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
