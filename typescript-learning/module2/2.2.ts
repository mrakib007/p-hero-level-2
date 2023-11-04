{
    //interface
    //can't use this for primitive data type
    //type can also be extended and used as interface
    //use type and alias for array and function
    //use interface for object or type alias anything you want.
    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }


    type UserWithRole1 = User1 & {role: string}

    interface UserWithRole2 extends User2{
        role: string;
    }

    const user1 : UserWithRole1 = {
        name: "Rakib",
        age: 26,
        role: 'manager',
    }


    type rollNumber = number;

    const user2 : User2 = {
        name: "Sakib",
        age: 100,
    }
    const user3 : UserWithRole2 = {
        name: "Sakib",
        age: 100,
        role: 'DM'
    }

    //js --> object, array --> object, function -> object
    type Roll1 = number[];
    interface Roll2 {
        [index : number] : number
    }
    const rollNumber1 : Roll1 = [1,2,3];
    const rollNumber2 : Roll2 = [1,2,3];

    type Add1 = (number1: number, number2: number) => number
    interface Add2 { 
        (number1: number, number2: number) : number
    }

    const add1 : Add1 = (number1,number2) => number1 + number2;
    const add2 : Add2 = (number1,number2) => number1 + number2;
}