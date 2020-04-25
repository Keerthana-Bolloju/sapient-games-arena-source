import { Component, OnInit, Input,  } from '@angular/core';
import { GameModel } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor(private gameService:GameService,private router:Router, private route:ActivatedRoute) { }

  @Input() gameData:GameModel;
  @Input() index:number

  ngOnInit() {    
    this.sendData()
    }

  sendData(){
    this.gameService.getGameByIndex(this.gameData)
  }

}
