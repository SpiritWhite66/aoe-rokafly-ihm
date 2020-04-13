import { BalanceService } from './balance.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval, Observable } from 'rxjs';
import { ILobby } from './../model/lobby';
import { IPlayer } from './../model/player';
import { LobbyService } from './lobby.service';

@Component({
  templateUrl: 'lobby.component.html',
})
export class LobbyComponent implements OnInit {
  lobby: ILobby;
  match_id: string;
  jsonResponse: ILobby;
  isComplet: Boolean;
  intervalMajLobby: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lobbyService: LobbyService,
    private spinner: NgxSpinnerService,
    private balanceService: BalanceService
  ) {}

  ngOnInit() {
    this.match_id = this.route.snapshot.params.match_id;
    this.searchWithLoad(this.match_id);
    const majLobby = interval(15000);
    this.intervalMajLobby = majLobby.subscribe(
      (n) => this.search(this.match_id),
      (err) => console.error(err.status)
    );
  }

  searchWithLoad(matchId: string) {
    this.spinner.show();

    this.lobbyService.getLobby().subscribe(
      (res) => {
        this.filtreLobbyAndPlayer(res, matchId);
        this.isCompletForBalancing();
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
      this.filtreLobbyAndPlayer(res, matchId);
      this.isCompletForBalancing();
      if (!this.lobby) {
        this.goBackBecauseNoExist();
      }
    });
  }

  private filtreLobbyAndPlayer(res: ILobby[], matchId: string) {
    this.lobby = res.filter((lobby: ILobby) => lobby.match_id === matchId)[0];
    if (this.lobby && this.lobby.players) {
      this.lobby.players = this.lobby.players.filter((player: IPlayer) => player.name !== null);
    }
  }

  balancingLobby(lobby: ILobby) {
    this.spinner.show();
    this.intervalMajLobby.unsubscribe();
    this.balanceService.postTeamBalance(lobby).subscribe((res) => {
      this.spinner.hide();
      this.lobby.players = res.players;
      if (!this.lobby) {
        this.goBackBecauseNoExist();
      }
    });
  }

  colorTeam(player: IPlayer) {
    if (player.color && player.color <= 4) {
      return 'table-primary';
    } else if (player.color > 4) {
      return 'table-danger';
    } else {
      return '';
    }
  }
  isCompletForBalancing() {
    if(this.lobby && this.lobby.players && this.lobby.players.length === 8) {
      this.isComplet = true;
    }
  }

  goBackBecauseNoExist() {
    this.router.navigate(['/', true]);
  }
}
