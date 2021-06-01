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

### Classes vs Functions
* Javascript is a dynamically typed functional programming language
* Functions are used to build reusable components through prototypes
* Class can include constructor, properties and methods


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

``` javascript
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
```
### Encapsulation
* Private (only your class knows about it)
* Protected (only your close members or children can know about it)
* Public (all know about the properties). Default modifier in TypeScript is public.

### Static methods, properties
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
        this.movieCount++;
    }
    static totalMoviews():string{
        return `There are ${this.movieCount} in our MovieDB`;
    }
}

let newMovie1 = new movieDb('brucelee','martial arts','1985');
console.log(movieDb.totalMoview());

```

### Inheritance

### super()

### Abstract


### Interface


### Generics

### Polymorphism
