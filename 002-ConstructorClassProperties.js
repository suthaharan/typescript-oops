"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
// typescript way of code organization
var Employee = /** @class */ (function () {
    function Employee(eid, ename, edepartment) {
        this.id = eid;
        this.name = ename;
        this.department = edepartment;
        this.isActive = true;
    }
    Employee.prototype.previewDepartment = function () {
        return this.department;
    };
    return Employee;
}());
exports.Employee = Employee;
var newEmployee1 = new Employee(1, 'Victor', 'Sales');
console.log(newEmployee1.previewDepartment());
