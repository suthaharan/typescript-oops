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