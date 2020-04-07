import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval } from 'rxjs';
import { ILobby } from './../model/lobby';
import { IPlayer } from './../model/player';
import { LobbyService } from './lobby.service';

@Component({
  templateUrl: 'lobby.component.html',
})
export class LobbyComponent implements OnInit {
  lobby: ILobby;
  match_id: string;
  jsonRequest: IPlayer[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lobbyService: LobbyService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.match_id = this.route.snapshot.params.match_id;
    this.searchWithLoad(this.match_id);
    const majLobby = interval(15000);
    majLobby.subscribe(
      (n) => this.search(this.match_id),
      (err) => console.error(err.status)
    );
  }

  searchWithLoad(matchId: string) {
    this.spinner.show();

    this.lobbyService.getLobby().subscribe(
      (res) => {
        this.lobby = res.filter(
          (lobby: ILobby) => lobby.match_id === matchId
        )[0];
        this.spinner.hide();
        if (!this.lobby) {
          console.log(this.lobby);
          this.goBackBecauseNoExist();
        }
      },
      (err) => {
        console.error(err.status);
      }
    );
  }

  search(matchId: string) {
    this.lobbyService.getLobby().subscribe((res) => {
      this.lobby = res.filter((lobby: ILobby) => lobby.match_id === matchId)[0];
      if (!this.lobby) {
        this.goBackBecauseNoExist();
      }
    });
  }

  balancingLobby(players: IPlayer[]) {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.jsonRequest = players.filter((n) => n.profile_id);
    }, 2000);
  }

  goBackBecauseNoExist() {
    this.router.navigate(['/', true]);
  }
}
