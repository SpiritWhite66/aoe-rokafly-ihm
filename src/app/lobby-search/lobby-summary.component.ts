import { Component, Input } from '@angular/core';
import { ILobby } from '../model/lobby';

@Component({
  selector: 'app-lobby-summary',
  templateUrl: 'lobby-summary.component.html'
})

export class LobbySummaryComponent{


  @Input() lobby: ILobby;

}
