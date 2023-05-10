// interface

// interface IVehicle {
//     name: string;
//     model: string;
// }


// const vehicle: IVehicle = {
//     name: "Car",
//     model: "200"
// };


//abstract class

interface IVehicle {
    startEngine(): void;
    stopeEngine(): void;
    move(): void;
}

class Vehicle implements IVehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {

    }

    test() {
        console.log("I am for testing purpose");
    }
    startEngine(): void {
        console.log("I am from start engine");
    }
    stopeEngine(): void {
        console.log("I am from stope Engine");
    }
    move(): void {
        console.log("I am from move ");
    }
}

const vehicle1 = new Vehicle("Yeamaha","i dont khow",6);