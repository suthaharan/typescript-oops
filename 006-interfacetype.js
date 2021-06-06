"use strict";
var s1 = {
    name: "sobeya",
    location: "city"
};
console.log(s1);
var s2 = {
    name: "sobeya",
    location: "city",
    findPlace: function (postalCode) {
        console.log(postalCode);
        return true;
    }
};
console.log(s2);
var merchant1 = { name: "John" };
