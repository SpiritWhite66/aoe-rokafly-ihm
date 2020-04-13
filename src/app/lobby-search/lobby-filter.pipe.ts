import { ILobby } from './../model/lobby';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lobbyFilter'
})
export class LobbyFilterPipe implements PipeTransform {
  transform(value: ILobby[], searchTerm: any = '') {
    console.log('LobbyFilterPipe:' + searchTerm );
    if (value && searchTerm !== '') {
      return value.filter((lobby: ILobby) => {
        return this.filtreMatch(lobby, searchTerm.match)
        && this.filtreServer(lobby, searchTerm.server);
      });
    } else {
      return value;
    }
  }

  filtreMatch(value: ILobby, match: string){
    if (match) {
      return (value.match_id.includes(match)
      || value.name.includes(match));
    } else {
      return true;
    }
  }

  filtreServer(value: ILobby, server: string){
    if (server) {
      return (value.server === server);
    } else {
      return true;
    }
  }

}
