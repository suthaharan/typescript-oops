interface Dimensions{
    length: number;
    breadth: number;
}

abstract class Shape{
    abstract dimensions(): Dimensions;
    draw():void{};
}

class Square extends Shape{
    sqdata: Dimensions;
    constructor(data:Dimensions){
        super();
        this.sqdata = data;
    }
    dimensions():Dimensions{
        return this.sqdata;
    }
}

let square1 = new Square({length:2, breadth:4});
console.log(square1.dimensions());