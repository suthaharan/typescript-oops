// typescript way of code organization
export class Employee{
    id: number;
    name: string;
    department: string;
    isActive: boolean;

    constructor(eid: number, ename: string, edepartment: string){
        this.id = eid;
        this.name = ename;
        this.department = edepartment;
        this.isActive = true;
    }  

    previewDepartment():string{
        return this.department;
    }
}

let newEmployee1 = new Employee(1, 'Victor', 'Sales');

console.log(newEmployee1.previewDepartment());