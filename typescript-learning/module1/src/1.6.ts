{

//learning function
//Normal function
//Arrow function

function add(number1 : number,number2 : number = 10){
    return number1 + number2;
}
add(2,4);

const addArrow = (number1 : number,number2 : number) : number =>{
    return number1 + number2;
}

//if we write a function in an object then it's called method.

const richUser = {
    name: 'Rakib',
    balance: 1000,
    addBalance(balance : number) : string {
        return `My new balance is : ${this.balance + balance}`;
    }
}

const array : number[] = [1,2,3];
const newArray : number[] = array.map((element : number) : number  => element * element);


}