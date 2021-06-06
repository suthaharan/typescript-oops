"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie = void 0;
var movie = /** @class */ (function () {
    function movie(name, description, year) {
        this._isNew = true;
        this.name = name;
        this.description = description;
        this.year = year;
    }
    Object.defineProperty(movie.prototype, "movieStatus", {
        get: function () {
            return this._isNew;
        },
        set: function (currentMovieStatus) {
            this._isNew = currentMovieStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(movie.prototype, "isMovieNew", {
        get: function () {
            return (this._isNew) ? "New Movie" : "Old Movie";
        },
        enumerable: false,
        configurable: true
    });
    return movie;
}());
exports.movie = movie;
var myMovie = new movie('bruce lee', 'movie from east', 1980);
console.log(myMovie.isMovieNew);
myMovie.movieStatus = false;
console.log(myMovie.isMovieNew);
