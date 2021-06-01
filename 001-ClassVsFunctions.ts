// typescript way of code organization
export class Employee{
    id: number;
    name: string;
    department: string;

    constructor(eid: number, ename: string, edepartment: string){
        this.id = eid;
        this.name = ename;
        this.department = edepartment;
    }  
}

// old way of coding with functions
function companyEmployee(id, name, department){
    this.id = id;
    this.name = name;
    this.department = department;
}

let newEmployee1 = new Employee(1, 'Victor', 'Sales');
let newEmployee2 = companyEmployee(2, 'Sara', 'Marketing');