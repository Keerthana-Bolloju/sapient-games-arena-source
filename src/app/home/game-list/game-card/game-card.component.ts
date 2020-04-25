import { Component, OnInit, Input,  } from '@angular/core';
import { GameModel } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor(private gameService:GameService) { }

  @Input() gameData:GameModel;
  @Input() index:number
  public title:string;
  public platform:string;

  ngOnInit() {    
    this.sendData()
    }

  sendData(){
    this.title = this.gameData.title
    this.platform = this.gameData.platform
    this.gameService.getGameByIndex(this.gameData)
  }

}
