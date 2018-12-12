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

  constructor(private fb: FormBuilder, private ts: TeamService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // use form builder to create the form
  }

  onSubmit() {
    // use team service create
  }

}
