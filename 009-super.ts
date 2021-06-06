// extends to extend the properties of the object
// implements takes the shapes of the object

export class properties{
    type: string;
    address: string;
    price: number;
    public doors = 1;
    constructor(ctype:string, caddress:string, cprice: number){
        this.type = ctype;
        this.address = caddress;
        this.price = cprice;
    }
    message():string{
        return "This is a property!";
    }
}

export class residential extends properties{
    doors = 4;
    // child class can have an object passed to the constructor
    // only parent class expects the parameters in certain order
    constructor(data:{type:string, address: string, price:number}){
        super(data.type, data.address, data. price);
    }
    message():string{
        
        return `This is a residential property! With ${this.doors}`;
    }
}

export class commercial implements properties{
    type: string;
    address: string;
    price: number;
    doors = 4;
    constructor(ctype:string, caddress:string, cprice: number){
        this.type = ctype;
        this.address = caddress;
        this.price = cprice;
    }
    message():string{
        return "This is a commercial property!";
    }
}

console.log(residential instanceof properties); //true
console.log(commercial instanceof properties); //false
