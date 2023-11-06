{
    //oop -> inheritance 
    class Person{
        name: string;
        age: number;
        address: string;

        constructor(name:string,age:number,address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours : number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Person{
        // name: string;
        // age: number;
        // address: string;

        constructor(name:string,age:number,address:string){
            super(name,age,address);           
            // this.name = name;
            // this.age = age;
            // this.address = address;
        }
        // getSleep(numOfHours : number){
        //     console.log(`${this.name} will sleep for ${numOfHours}`);
        // }
    }

    class Teacher extends Person {
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name:string,age:number,address:string,designation: string){
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name,age,address);
            this.designation = designation;
        }
        // getSleep(numOfHours : number){
        //     console.log(`${this.name} will sleep for ${numOfHours}`);
        // }
        takeClass(numOfClass : number){
            console.log(`${this.name} will sleep for ${numOfClass}`);
        }
    }

    const student1 = new Student("Rakib",20,"Bangladesh",);
    const teacher1 = new Teacher("Mehrab",45,"Bangladesh","Principal");
}