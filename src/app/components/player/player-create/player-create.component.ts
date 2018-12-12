import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  public playerForm: FormGroup
  // Add inputs for Id and title

  constructor(private fb: FormBuilder, private ps: PlayerService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // create form group using form builder, get id from input
  }

  onSubmit() {
    // use the create player service
  }

}
