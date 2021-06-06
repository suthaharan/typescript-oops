"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superStore = void 0;
var superStore = /** @class */ (function () {
    function superStore(cname, address) {
        this.name = cname;
        this.location = "city";
        this.address = address;
    }
    superStore.prototype.findPlace = function (postalCode) {
        if (postalCode == "m1h")
            return true;
        else
            return false;
    };
    return superStore;
}());
exports.superStore = superStore;
var myStore = new superStore("MoreSuperStore", "11 junv blvd");
console.log(myStore.findPlace("m1h"));
console.log(myStore instanceof superStore);
var newMegaStore = {
    name: "Pooja",
    location: "city",
    address: "new address"
};
//newMegaStore.name = "Grocery"; // this will not work
