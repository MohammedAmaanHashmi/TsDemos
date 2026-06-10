// super() - used to invoke immediate parent class constructor
// super - used to invoke immediate parent class method
// super - cannot be used to invoke the parent class property. (In java it is possible)

class Parent {
    num: number = 10;

    constructor() {
        console.log("Parent class constructor");
    }

    display() {
        console.log("This is display() method from parent class....");
    }
}

class Child extends Parent {

    num: number = 20; //overridden

    constructor() {
        super(); //this will call parent class constructor(must be called)
        console.log("This is child class constructor");
    }

    show() {
        //  console.log(super.num); // parent's num // TS doesn't support super.num to access parent class properties directly like Java does.
        console.log(this.num); //20
        console.log("This is show() method from the child class");
    }

    //Overriden method
    display() {
        console.log("This is display() method from child class...");
        super.display(); //This will invoke parent class method
    }

}

let c1 = new Child();
c1.show(); //child class
c1.display(); //child class
