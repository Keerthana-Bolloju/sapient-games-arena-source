export class GameModel {
    constructor(
        public title:string,
        public url:string,
        public platform:string,
        public score:number,
        public genre:string,
        public editors_choice:string,
        public release_year:number,
    ){}
}
