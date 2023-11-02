{
    //Type alias
    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }

    const student1: Student = {
        name: 'Rakib',
        age: 26,
        gender: 'male',
        contactNo: '0177777',
        address: 'Kallyanpur'
    };

    const student2: Student = {
        name: 'Sakib',
        age: 40,
        gender: 'male',
        address: 'Dhaka',
    }
    const student3: Student = {
        name: 'Sakib',
        age: 40,
        gender: 'male',
        address: 'Dhaka',
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName : UserName = 'Rakku';
    const isAdmin : IsAdmin  = true;

    type Add = (num1: number,num2: number) => number

    const add : Add = (num1,num2) => num1 + num2;

    //
}