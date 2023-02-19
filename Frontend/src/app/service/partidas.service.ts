import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../model/partida';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private httpService: HttpClient) { }

  getPartidas():Observable<Partida[]>{
    return this.httpService.get<Partida[]>('http://localhost:3001/partidas');
  }
}
