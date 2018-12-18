import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-index',
  templateUrl: './player-index.component.html',
  styleUrls: ['./player-index.component.css']
})
export class PlayerIndexComponent implements OnInit {
  // mention diff ways of writing object arrays?
  playerArray: Array<Object>;

  constructor(private ps: PlayerService) { }

  ngOnInit() {
    this.ps.getPlayers().subscribe((getAllPlayersFromDb:Object[])=>{
      this.playerArray = getAllPlayersFromDb;
    })  
  }

}
