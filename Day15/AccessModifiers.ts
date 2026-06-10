//parent class
export { }
class Person {
    public name: string;      // public property - accessible anywhere
    protected age: number;    // protected property - accessible within the class and its subclasses.
    private ssn: number;      // private property - accessible only within this class

    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    public displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("SSN:", this.ssn);
    }

}

//Child class
class Employee extends Person {
    private employeeId: number;
    constructor(name: string, age: number, ssn: number, employeeId: number) {
        super(name, age, ssn);
        this.employeeId = employeeId;
    }

    showEmployeeDetails() {
        console.log(this.name); //public accessible
        console.log(this.age);  //Protected - accessible
        //  console.log(this.ssn);  //Property 'ssn' is private and only accessible within class 'Person'.
        console.log(this.employeeId); //Private, still we can access since it is declared inside the same class
    }

}


let emp = new Employee("John", 13, 12341231, 101);
emp.displayInfo();
emp.showEmployeeDetails();
console.log(emp.name); //accessible
//console.log(emp.age); // Not accessible - Property 'age' is protected and only accessible within class 'Person' and its subclasses.
//console.log(emp.ssn); //Not accesible - Property 'ssn' is private and only accessible within class 'Person'.
// console.log(emp.employeeId); //Not accesible - Property 'employeeId' is private and only accessible within class 'Employee'.