export class movie{
    name: string;
    description: string;
    year: number;
    private _isNew: boolean;

    constructor(name:string, description:string, year:number){
        this._isNew = false;
        this.name = name;
        this.description = description;
        this.year = year;
    }

    get isMovieNew():string{
        return (this._isNew)?"New Movie":"Old Movie";
    }

    set movieStatus(passedYear:number){
        this._isNew = (this.year > passedYear)?true:false;
    }

}