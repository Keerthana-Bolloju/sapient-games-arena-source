import { Pipe, PipeTransform } from '@angular/core';
import { GameModel } from '../models/game.model';

@Pipe({
    name: 'searchVal'
  })
  export class SearchPipe implements PipeTransform {
  
    transform(list: GameModel[], filterText: string): any {
    //   return list ? list.filter(item => {item.title.toLocaleLowerCase().match(filterText.toLocaleLowerCase())}) : [];
    }
  
  }
  