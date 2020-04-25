import { Injectable } from '@angular/core';
import { GameModel } from '../models/game.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public gameDOMChange = new Subject<GameModel>();
  getGame = this.gameDOMChange.asObservable();

  constructor() { }

  getGameByIndex(game:GameModel){
    return this.gameDOMChange.next(game)
  }

  getData(): Observable<any> {
    return this.gameDOMChange.asObservable();
}

}
