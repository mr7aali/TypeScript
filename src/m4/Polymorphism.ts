// class Person {
//     takeNap(): void {
//         console.log("I am sleeping in Person");
//     }
// }

// class Student extends Person {
//     takeNap(): void {
//         console.log("I am sleeping in Student");
//     }
// }

// class Developer extends Person {
//     takeNap(): void {
//         console.log("I am sleeping in Developer");
//     }
// }

// function getNap(param: Person) {
//     param.takeNap();
// }

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// getNap(person1);
// getNap(person2);
// getNap(person3);



class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
    return Math.PI * this.radius * this.radius;

    }
} 

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}


function getAreaOfShape(param:Shape){
    console.log(param.getArea());
}

getAreaOfShape(new Circle(20))
getAreaOfShape(new Rectangle(20,20))

