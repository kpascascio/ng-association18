import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get('http://localhost:3000/api/player')
  }

  createPlayer(playerObj: any): any {
    return this.http.post('http://localhost:3000/api/player', playerObj)
  }

}
