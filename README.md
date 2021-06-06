# typescript-oops
Intro to TypeScript with OOPS concept

$ tsc --version
4.3.2

### Javascript
* Only variable declarations move to the top, not the initialized variables - this is called hoisting
* JavaScript compiler moves function definition before variable declaration.


### TypeScript Intro
* ECMAScript 6 (also known as ECMAScript 2015)
* Classes in TypeScript is compiled to plain JavaScript functions by the TypeScript compiler to work across multiple platforms and browsers.
* TypeScript is javascript that scales
* TypeScript can be compiled to support older browsers
* Helps enforce good habits
* Based on .net harmony specification

### Classes vs Functions
* Javascript is a dynamically typed functional programming language
* Functions are used to build reusable components through prototypes
* Class can include constructor, properties and methods

### Enums vs unions
* Enums are used when there is group of related constants in the programs. It is an efficient way to group constants.
* Unions are easier to think and code
```javascript
enum fruits {
    APPLE=2,
    MANGO,
    PEARS
}
// you can assign string values instead of defaut numeric values
// enum fruits {
//     APPLE="apple",
//     MANGO="mango",
//     PEARS="pears"
// }

// by default the attributes have values starting from 0
// enum fruits {
//     APPLE,
//     MANGO,
//     PEARS
// }


// to get numeric values of the attributes, declare it as constant
// const enum fruits {
//     APPLE,
//     MANGO,
//     PEARS
// }
console.log(fruits);
console.log(fruits.APPLE);

let vegetables : "carrot"|"onion"|"beet" = "onion";
```

### Functions & Prototypes
* Prototype is an object that is associated with every functions, objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property is not visible
* All javascript objects inherits properties and methods from prototype
* Function is a object
* To extend functional properties prototypes are used
```javascript
function companyEmployee(id, name, department){
    this.id = id;
    this.name = name;
    this.department = department;
    this.aboutEmployee = function(){
        return "Employee "+this.name+" is from "+this.department+" department";
    }
}
```
- In the above example, companyEmployee.aboutEmployee returns function definition while companyEmployee.aboutEmployee() returns the statement.

### Constructor, Class Properties
```javascript
export class Employee{
    id: number;
    name: string;
    department: string;
    isActive: boolean;

    constructor(eid: number, ename: string, edepartment: string){
        this.id = eid;
        this.name = ename;
        this.department = edepartment;
        this.isActive = true;
    }  

    previewDepartment():string{
        return this.department;
    }
}
let newEmployee1 = new Employee(1, 'Victor', 'Sales');
console.log(newEmployee1.previewDepartment());
```

### Get, Set in TypeScript
* Get is simply a property that will return a value based on a logic
* It is used to access values from variables that cannot be accessed outside of class
* Set is used to assign values to property

``` javascript
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
```
### Encapsulation
* Encapsulation enables you to perform - data hiding. Hide certain data so it’s not changed accidentally or purposefully by other components
* Private (only your class knows about it). Private variables are not accessible by the children. Limiting the scope of the availability - access modifier.
* Protected (only your close members or children can know about it)
* Public (all know about the properties). Default modifier in TypeScript is public.






### Static methods, properties
* you don't instantiate them
* helps in as util functions

``` javascript
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

```
### Access Modifiers
* readonly helps override values



### Inheritance
* Parent child class relationships
* The properties/methods that are common and the ones that are specific to certain object are clearly defined using inheritance



### super()
// extends to extend the properties of the object
// implements takes the shapes of the object
```javascript
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
```

### Abstract
* Abstract classes are just there for it to be inherited and it cant be instantiated
* Abstract on a class means it needs to be extended
* Abstract on a method inside abstract class means it needs to be implemented

```javascript
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

let square1 = new Square({length:2, height:4})

```

### Interface vs Type
* When you compile code, interface code goes away. It is 0 cost.
* When program runs, interface does not slow down cost
* Type is used to combine various types in various ways
``` javascript
interface store{
    name: string,
    location: "city" | "village"
}
interface townStore extends store{
    address?: string,
    findPlace(postalcode:string): boolean;
}
let s1 : store = {
    name: "sobeya",
    location: "city"
}
console.log(s1);
let s2 : townStore = {
    name: "sobeya",
    location: "city",
    findPlace(postalCode:string){
        console.log(postalCode);
        return true;
    }
}
console.log(s2);
type merchant = {name: string};
let merchant1 = { name: "John" };
```

Let's now try to implement the interface using a class

``` javascript
interface store{
    name: string,
    location: "city" | "village"
}
interface townStore extends store{
    address?: string,
    findPlace(postalcode:string): boolean;
}
class superStore implements townStore{
    name:string;
    location: "city" | "village";
    address: string;
    constructor(cname:string, address: string){
        this.name = cname;
        this.location = "city";
        this.address = address;
    }
    findPlace(postalCode:string):boolean{
        if(postalCode == "m1h")
            return true;
        else
            return false;    
    }
}

let myStore = new superStore("MoreSuperStore", "11 junv blvd");
console.log(myStore.findPlace("m1h"));

```

You can also have read-only properties added to interfaces. These are like help/info text for other programmers to outline the values of the objects

``` javascript
interface MegaStore{
    readonly name: string,
    readonly location: "city",
    readonly address: string
}

let newMegaStore: MegaStore = {
    name: "Pooja",
    location: "city",
    address: "new address"
}
newMegaStore.name = "Grocery"; // this will not work

```



### Polymorphism
* Parameter overloading/method overloading, child overrides parents
* Method overloading (javascript doesn't support this)
* interfaces/abstract methods implements



### Generics
* Gives static typing to dynamic type
* Prevents repeatable functions for change in types

```javascript
class BulkData<T>{
    items: Array<T> = [];

    add(item: T){
        this.items.push(item);
    }
    remove(item: T){
        const index = this.items.findIndex(i => i === item);
        this.items.splice(index, 1);
        return this.items;
    }
}

const myData = new BulkData<number>();
myData.add(1);
myData.add(3);
myData.remove(2);

const myData2 = new BulkData<string>();
myData2.add("raz");
myData2.add("jaz");
myData2.remove("jaz");


```