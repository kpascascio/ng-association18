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
  @Input() id:number;
  @Input() title:string;
  constructor(private fb: FormBuilder, private ps: PlayerService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.playerForm = this.fb.group({
      name: new FormControl(), 
      playerNumber: new FormControl(),
      teamId: this.id
    })
  }

  onSubmit() {
    this.ps.createPlayer(this.playerForm.value).subscribe(createdPlayerFromDb =>{
      console.log(createdPlayerFromDb)
    })
  }

}
