import { ILobby } from './../model/lobby';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BalanceService {

  private url = 'http://127.0.0.1:8000/api/v1/balancer/';

  constructor(private http: HttpClient) { }

  postTeamBalance(lobby: ILobby): Observable<ILobby>{
    return this.http.post<ILobby>(this.url, lobby);
  }

}
