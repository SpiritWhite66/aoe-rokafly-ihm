import { ILobby } from './../model/lobby';
import { HttpClient } from '@angular/common/http';
import { LobbySearchService } from './lobby-search.service';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: 'lobby-search.component.html'
})

export class LobbySearchComponent implements OnInit{

  constructor(private lobbySearchService: LobbySearchService) {

  }

  lobbies: ILobby[];
  matchId: string;
  selectedLobby: ILobby;

  ngOnInit() {
    this.search();
  }

  search() {
    this.lobbySearchService.getLobbies()
                                     .subscribe(res => this.lobbies = res ,
                                      err => console.error(err.status));
    console.log('Appel Service');
  }

  selectLobby(lobby: ILobby){
    this.selectedLobby = lobby;
    console.log(lobby);
  }
}
