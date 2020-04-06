import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILobby } from '../model/lobby';
@Injectable()
export class LobbySearchService {
  private url = 'http://localhost:3000/api/lobby';

  constructor(private http: HttpClient) {}

  getLobbies(): Observable<ILobby[]>{
    return this.http.get<ILobby[]>(this.url);
  }
}
