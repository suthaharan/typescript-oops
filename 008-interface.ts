interface store{
    name: string,
    location: "city" | "village"
}
interface townStore extends store{
    address?: string,
    findPlace(postalcode:string): boolean;
}
export class superStore implements townStore{
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
console.log(myStore instanceof superStore);

// Read-only property of MegaStore
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
//newMegaStore.name = "Grocery"; // this will not work