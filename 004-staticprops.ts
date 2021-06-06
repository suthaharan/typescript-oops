export class movieDb{
    name: string;
    description: string;
    year: number;
    private _isNew: boolean;
    private static movieCount: number = 0;
    constructor(name:string, description:string, year:number){
        this._isNew = false;
        this.name = name;
        this.description = description;
        this.year = year;
        movieDb.movieCount++;
    }
    static totalMovies():string{
        return `There are ${movieDb.movieCount} movies in our MovieDB`;
    }
}

let newMovie1 = new movieDb('brucelee','martial arts',1985);
console.log(movieDb.totalMovies());