"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieDb = void 0;
var movieDb = /** @class */ (function () {
    function movieDb(name, description, year) {
        this._isNew = false;
        this.name = name;
        this.description = description;
        this.year = year;
        movieDb.movieCount++;
    }
    movieDb.totalMovies = function () {
        return "There are " + movieDb.movieCount + " movies in our MovieDB";
    };
    movieDb.movieCount = 0;
    return movieDb;
}());
exports.movieDb = movieDb;
var newMovie1 = new movieDb('brucelee', 'martial arts', 1985);
console.log(movieDb.totalMovies());
