"use strict";
// extends to extend the properties of the object
// implements takes the shapes of the object
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.commercial = exports.residential = exports.properties = void 0;
var properties = /** @class */ (function () {
    function properties(ctype, caddress, cprice) {
        this.doors = 1;
        this.type = ctype;
        this.address = caddress;
        this.price = cprice;
    }
    properties.prototype.message = function () {
        return "This is a property!";
    };
    return properties;
}());
exports.properties = properties;
var residential = /** @class */ (function (_super) {
    __extends(residential, _super);
    // child class can have an object passed to the constructor
    // only parent class expects the parameters in certain order
    function residential(data) {
        var _this = _super.call(this, data.type, data.address, data.price) || this;
        _this.doors = 4;
        return _this;
    }
    residential.prototype.message = function () {
        return "This is a residential property! With " + this.doors;
    };
    return residential;
}(properties));
exports.residential = residential;
var commercial = /** @class */ (function () {
    function commercial(ctype, caddress, cprice) {
        this.doors = 4;
        this.type = ctype;
        this.address = caddress;
        this.price = cprice;
    }
    commercial.prototype.message = function () {
        return "This is a commercial property!";
    };
    return commercial;
}());
exports.commercial = commercial;
console.log(residential instanceof properties); //true
console.log(commercial instanceof properties); //false
