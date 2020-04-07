import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IServer } from '../model/server';
import { environment } from './../../environments/environment';

@Injectable()
export class ServerService {
  private url = '../../assets/api/server.json';

  constructor(private http: HttpClient) {}

  getServers(): Observable<IServer[]>{
    return this.http.get<IServer[]>(this.url);
  }
}
