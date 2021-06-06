"use strict";
var BulkData = /** @class */ (function () {
    function BulkData() {
        this.items = [];
    }
    BulkData.prototype.add = function (item) {
        this.items.push(item);
    };
    BulkData.prototype.remove = function (item) {
        var index = this.items.findIndex(function (i) { return i === item; });
        this.items.splice(index, 1);
        return this.items;
    };
    return BulkData;
}());
var myData = new BulkData();
myData.add(1);
myData.add(3);
myData.remove(2);
var myData2 = new BulkData();
myData2.add("raz");
myData2.add("jaz");
myData2.remove("jaz");
