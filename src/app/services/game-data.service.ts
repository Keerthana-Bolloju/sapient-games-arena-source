import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError, first } from 'rxjs/operators';
import { GameService } from './game.service';
import { GameModel } from '../models/game.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GameDataService {

    private _URL = "http://starlord.hackerearth.com/gamesext"

    constructor(private _HTTP: HttpClient, private gameService: GameService) { }

    getGamesData(): Observable<GameModel[]> {
        return this._HTTP.get<GameModel[]>(this._URL)
            .pipe(
                map(games => {
                    return games
                }),
                tap(_ => console.log('fetched games')),
                catchError(this.handleError<GameModel[]>('getGames', []))
            )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
