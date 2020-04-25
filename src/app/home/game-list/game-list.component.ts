import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { GameModel } from 'src/app/models/game.model';
import { GameDataService } from 'src/app/services/game-data.service';
import { Z_ASCII } from 'zlib';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public games:GameModel[];
  public pageNo:number = 1;
  public sortString:string = '';
  public length:number;
  public inputText:string;

  constructor(private gameDataService:GameDataService,private gameService:GameService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.gameDataService.getGamesData().subscribe(
      (data:GameModel[])=>{
        this.games = data
        // this.games = 
      
        this.length = this.games.length
      }
    )
  }

 default(){
   this.pageNo = 1
 }


    
  sortByScoreHTL(sort:string){
    this.sortString = sort
    this.games.sort((a,b)=>{
      return b.score - a.score
    })
  }
  
  sortByScoreLTH(sort:string){
    this.sortString = sort
    this.games.sort((a,b)=>{
      return a.score - b.score
    })
  }

  sortByYearLatest(sort:string){
    this.sortString = sort
    this.games.sort((a,b)=>{
      return b.release_year - a.release_year
    })
  }
  
  sortByYearOldest(sort:string){
    this.sortString = sort
    this.games.sort((a,b)=>{
      return a.release_year - b.release_year
    })
  }

  sortByAtoZ(sort:string){
    this.sortString = sort;
     this.games.sort((a, b)=>{
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    })
  }
  
  sortByZtoA(sort:string){
    this.sortString = sort;
     this.games.sort((a, b)=>{
      if(b.title < a.title) { return -1; }
      if(b.title > a.title) { return 1; }
      return 0;
    })
  }

}
