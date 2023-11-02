//reference type --> object

const user : {
    // company: string;
    readonly company: string;
    // company: 'BacBon'; //type --> literal type this value will always be fixed.
    firstName: string;
    middleName? : string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'BacBon',
    firstName : 'Rakib',
    // middleName: 'Hasan',
    lastName: 'Hasan',
    isMarried: false,
}
