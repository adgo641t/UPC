import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../model/partida';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private httpService: HttpClient) { }

  /**
   * This method is used to retrieve the data from the database to the 
   * Node and sendit to the Angular service and return and observable from 
   * partida model and  send to the ranking component 
   * @returns Partida
   */
  getPartidas():Observable<Partida[]>{
    return this.httpService.get<Partida[]>('http://localhost:3001/partidas');
  }

  deletePartida(partida:Partida):Observable<Partida[]> {
    return this.httpService.post<Partida[]>('http://localhost:3001/DeletePartida',partida);
  }
}
