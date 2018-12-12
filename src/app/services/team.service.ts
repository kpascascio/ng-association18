import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams() {
    // create get request
  }

  createTeam(teamObj) {  
    // this create post request 
  }
}
