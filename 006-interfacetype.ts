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