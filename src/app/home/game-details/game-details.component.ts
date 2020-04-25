import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameModel } from 'src/app/models/game.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, OnDestroy {

  public game:GameModel;
  public subscription:Subscription;

  constructor(private gameService:GameService , private route:ActivatedRoute, private router:Router) { 
  }

  ngOnInit() {
    this.subscription = this.gameService.getGame.subscribe(
      game =>{
        this.game = game
      }
    )
  }

  ngOnDestroy(){
    // this.subscription.unsubscribe()
  }
}
