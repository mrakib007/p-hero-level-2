{
    //generic type

    // type GenericArray = Array<number>
    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [2,6,5];
    // const rollNumbers : Array<number> = [2,6,5];
    const rollNumbers : GenericArray<number> = [2,6,5];

    // const mentors : string[] = ['Rakib','Sakib','Yeamin'];
    // const mentors : Array<string> = ['Rakib','Sakib','Yeamin'];
    const mentors : GenericArray<string> = ['Rakib','Sakib','Yeamin'];

    // const boolArray : boolean[] = [true,false,true];
    // const boolArray : Array<boolean> = [true,false,true];
    const boolArray : GenericArray<boolean> = [true,false,true];

    interface User {
        name: string;
        age: number;
    }

    const user : GenericArray<User> = [
        {
            name: 'Rakib',
            age: 26,
        },
        {
            name: 'Sakib',
            // age: "18",
            age: 18,
        },
    ]

    const add = (x : number, y : number) => x + y;

    add(10,20);

    //generic tuple
    type GenericTuple<x,y> = [x,y]
    const human : GenericTuple<string,string> = ['Rakib','Humaira'];
    const userWitId : GenericTuple<number,{name: string,email: string}> = [12,{name: 'Rakib',email: 'rakib@gmail.com'}];
}