"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(eid, ename, edepartment) {
        this.id = eid;
        this.name = ename;
        this.department = edepartment;
    }
    return Employee;
}());
exports.Employee = Employee;
function companyEmployee(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
}
var newEmployee1 = new Employee(1, 'Victor', 'Sales');
var newEmployee2 = companyEmployee(2, 'Sara', 'Marketing');
