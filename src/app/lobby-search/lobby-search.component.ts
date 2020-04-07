import { IServer } from './../model/server';
import { ILobby } from './../model/lobby';
import { HttpClient } from '@angular/common/http';
import { LobbySearchService } from './lobby-search.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from './server.service';

@Component({
  templateUrl: 'lobby-search.component.html'
})

export class LobbySearchComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private lobbySearchService: LobbySearchService,
              private spinner: NgxSpinnerService,
              private serverService: ServerService) {

  }

  lobbies: ILobby[];
  servers: IServer[];
  matchId: string;
  serverValue: IServer;
  selectedLobby: ILobby;
  errorNotExist: boolean;
  ngOnInit() {
    this.spinner.show();
    this.errorNotExist = this.route.snapshot.params.error;
    this.searchWithLoad();
    const majLobby = interval(15000);
    majLobby.subscribe(n => this.searchLobby());
    this.searchServer();
    setTimeout(() => {
      this.errorNotExist = false;
    }, 10000);
    this.spinner.show();
  }

  searchWithLoad() {
    this.spinner.show();
    this.lobbySearchService.getLobbies()
                                     .subscribe(res => {
                                        this.lobbies = res;
                                        this.spinner.hide();
                                      } ,
                                      err => { console.error(err.status);  });
  }

  searchLobby() {
    this.lobbySearchService.getLobbies()
                                     .subscribe(res => this.lobbies = res ,
                                      err => console.error(err.status));
  }

  searchServer() {
    this.serverService.getServers()
                                     .subscribe(res => this.servers = res ,
                                      err => console.error(err.status));
  }

  selectLobby(lobby: ILobby){
    this.selectedLobby = lobby;
  }

  refresh() {
    this.searchWithLoad();
    this.selectedLobby = null;
  }
}
