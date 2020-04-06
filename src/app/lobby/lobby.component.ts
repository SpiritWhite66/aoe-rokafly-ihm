import { LobbyService } from './lobby.service';
import { ActivatedRoute } from '@angular/router';
import { ILobby } from './../model/lobby';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  templateUrl: 'lobby.component.html'
})

export class LobbyComponent implements OnInit{

  lobby: ILobby;
  match_id: string;
  constructor(private route: ActivatedRoute, private lobbyService: LobbyService) {}

  ngOnInit() {
    this.match_id = this.route.snapshot.params.match_id;
    console.log(this.match_id);

    this.lobbyService.getLobby()
                                     .subscribe(res => this.lobby = res.filter((lobby: ILobby) => lobby.match_id === this.match_id)[0],
                                      err => console.error(err.status));
  }


  balancingLobby() {
    console.log('Appel du balancing');
  }
}
