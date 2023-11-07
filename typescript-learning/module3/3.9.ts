{
    //Abstraction in OOP

    // idea
    interface Vehicle1 {
        // name: string;
        // model: number;
        startEngine(): void
        stopEngine(): void
        move(): void
    }
    // const vehicle1 : Vehicle1 = {
    //     name: 'toyota',
    //     model: 2000,
    // }

    //real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('I am starting the car engine');
        }
        stopEngine(): void {
            console.log('I am stoping the car engine');
        }
        move(): void {
            console.log('I am moving the car');
        }
        test() {
            console.log('This is test method');
        }
    }

    const toyotacar = new Car1();
    toyotacar.startEngine();

    //abstarct class
    //idea
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log('This is test method');
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('I am starting the car engine');
        }
        stopEngine(): void {
            console.log('I am stopping the car engine');
        }
        move(): void {
            console.log('I am moving the car');
        }
    }

    // const hondaCar = new Car2();
    // hondaCar.startEngine();




}