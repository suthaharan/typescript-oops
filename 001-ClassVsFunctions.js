"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
// typescript way of code organization
var Employee = /** @class */ (function () {
    function Employee(eid, ename, edepartment) {
        this.id = eid;
        this.name = ename;
        this.department = edepartment;
    }
    return Employee;
}());
exports.Employee = Employee;
// old way of coding with functions
// function companyEmployee(id, name, department){
//     this.id = id;
//     this.name = name;
//     this.department = department;
// }
var newEmployee1 = new Employee(1, 'Victor', 'Sales');
//let newEmployee2 = companyEmployee(2, 'Sara', 'Marketing');
