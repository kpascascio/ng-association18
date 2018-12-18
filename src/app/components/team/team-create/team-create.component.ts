import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  // create the formGroup (no nu)
  public teamForm: FormGroup;

  constructor(private fb: FormBuilder, private teamService: TeamService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.teamForm = this.fb.group({
      name: new FormControl(), 
      mascot: new FormControl()
    })
  }

  onSubmit() {
    this.teamService.createTeam(this.teamForm.value).subscribe(createdTeamFromDb => {
      console.log(createdTeamFromDb)
    })
  }
}
