{
    //utility type
    //pick 
    type Person = {
        name: string;
        age: number;
        email?:string;
        contactNo: string;
    }
    type NameAge = Pick<Person,"name"|"age">

    //omit
    type ContactInfo = Omit<Person,"name"|"age">;

    //require
    type PersonRequired = Required<Person>;

    //Partial
    type PersonPartial = Partial<Person>;

    //Read only 
    type PersonReadonly = Readonly<Person>
    const  person1 : PersonReadonly = {
        name: "Rakib",
        age: 26,
        contactNo: '0178888',
    }
    // person1.name = "Sakib";

    //Record

    // type MyObj = {
    //     a: string,
    //     b: string,
    // }

    type MyObj = Record<string,string>
    const EmptyObj : Record<string,unknown> = {};

    const obj1 : MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    }

}