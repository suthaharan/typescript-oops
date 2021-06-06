export class vehicle{
    name: string;
    wheels: number;
    constructor(cname: string, cwheels: number){
        this.name = cname;
        this.wheels = cwheels;
    }
}

export class car extends vehicle{
    horn():string{
        return "beep! beep!";
    }
}

export class bicycle extends vehicle{
    bell():string{
        return "ding! dong!";
    }
}

let heroCycle = new bicycle("Hero", 2);
console.log(heroCycle.bell());
