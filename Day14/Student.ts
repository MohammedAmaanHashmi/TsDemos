/*
1. Class
2. Read only Properties
3. Optional property


4. Static variables and methods

// 1) static properties/methods are common/shared across all teh objects
// 2) static properties/methods can be accessed through class name directly
// 3) static properties /methods can be modified using any object

*/

export { }
class Student {

    readonly studentId: number; //read-only property (can only be assigned once, inside constructor)
    name: string; //regular property
    email?: string; //Optional property (can be undefined)
    static schoolName: string = "Greenwood High"; //Static variable among all instance objects

    // Constructor

    constructor(sid: number, sname: string, email?: string) {
        this.studentId = sid;
        this.name = sname;
        this.email = email;
    }

    // Method

    displayInfo(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);

        if (this.email) {
            console.log("Email:", this.email);
        }
        else {
            console.log("Email is not provided")
        }

        console.log("School Name:", Student.schoolName); // acess static property using student (clas name)

    }

    static changeSchoolName(name: string): void {
        Student.schoolName = name;
    }

}

//usage
let s1 = new Student(101, "John");
let s2 = new Student(101, "Bob", "bob@gmail.com");

//Display stugent Info
s1.displayInfo();
s2.displayInfo();


//Try to modify the studentId of s1 object.
//s1.studentId=111; //Cannot assign to 'studentId' because it is a read-only property

// Change the school Name using static method
Student.changeSchoolName("Sunrise Academy");

//Display stugent Info
console.log("Displaying student info after changin school name.....");
s1.displayInfo();
s2.displayInfo();


