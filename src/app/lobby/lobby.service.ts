import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { first, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ILobby } from '../model/lobby';
import { environment } from './../../environments/environment';

@Injectable()
export class LobbyService {
  private url = environment.apiUrl + 'api/lobby';

  constructor(private http: HttpClient) {}

  getLobby(): Observable<ILobby[]>{
    return this.http.get<ILobby[]>(this.url);

  }
}
