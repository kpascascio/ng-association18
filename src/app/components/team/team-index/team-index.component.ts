import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-index',
  templateUrl: './team-index.component.html',
  styleUrls: ['./team-index.component.css']
})
export class TeamIndexComponent implements OnInit {
  teamArray: Object[];
  createdClicked = false;
  tempTeamId: number
  tempTeamName: string

  constructor(private ts: TeamService) { }

  ngOnInit() {
    this.ts.getTeams().subscribe((teamArrayFromDB: Object[]) => {
      this.teamArray = teamArrayFromDB;
    })

  }

  // talk about what this function is doing
  clickedBtn(id, name) {
    this.createdClicked = !this.createdClicked;
    this.tempTeamId = id;
    this.tempTeamName = name
  }

}
