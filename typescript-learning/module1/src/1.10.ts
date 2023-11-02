{
    //union types

    // type FrontEndDeveloper = 'fakibaajDeveloper' | 'juniorDeveloper'; //string literal type
    // type FullStackDeveloper = 'frontEndDeveloper' | 'expertDeveloper'; //string literal type
    
    // type Developer =FrontEndDeveloper | FullStackDeveloper;

    // const newDeveloper : FrontEndDeveloper = 'juniorDeveloper';

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female",
    //     bloodGroup: "o+" | "a+" | "ab+",
    // }

    // const user1 : User = {
    //     name: 'Rakib',
    //     gender: 'male',
    //     bloodGroup: "o+",
    // }

    type FrontEndDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer', 
    }
    type BackEndDeveloper = {
        skills: string[];
        designation2: 'Backend Developer', 
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

    const fullStackDeveloper : FullStackDeveloper = {
        skills : ['HTML','CSS','EXPRESS',],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',
    }



    //
}
