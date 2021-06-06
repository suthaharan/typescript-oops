export class movie{
    name: string;
    description: string;
    year: number;
    private _isNew: boolean;

    get movieStatus():boolean{
        return this._isNew;
    }
    set movieStatus(currentMovieStatus:boolean){
        this._isNew = currentMovieStatus;
    }

    constructor(name:string, description:string, year:number){
        this._isNew = true;
        this.name = name;
        this.description = description;
        this.year = year;
    }

    get isMovieNew():string{
        return (this._isNew)?"New Movie":"Old Movie";
    }
}

let myMovie = new movie('bruce lee', 'movie from east', 1980);
console.log(myMovie.isMovieNew);
myMovie.movieStatus=false;
console.log(myMovie.isMovieNew)