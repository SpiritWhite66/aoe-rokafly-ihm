import { ILobby } from './../model/lobby';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lobbyFilter'
})
export class LobbyFilterPipe implements PipeTransform{
  transform(value: ILobby[], searchTerm: string = '') {
    if(searchTerm !== '') {
      return value.filter((lobby: ILobby) => lobby.match_id.includes(searchTerm) || lobby.name.includes(searchTerm));
    } else {
      return value;
    }
  }
}
