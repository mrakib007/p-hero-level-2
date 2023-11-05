{
    //mapped type
    const arrOfNumbers : number[] = [1,4,5];
    // const arrOfStrings : string[] = ["1","4","5"];

    const arrOfStrings : string[] = arrOfNumbers.map((number) =>
    number.toString());
    console.log(arrOfStrings);

    type AreaNumber = {
        height: number;
        widht: number;
    };

    type Height = AreaNumber["height"] //lookup type
    // type AreaString = {
    //     height: string;
    //     width: string;
    // }
    //keyof AreaNumber => "height"|"width"

    type AreaString<T> = {
        [key in keyof T] : T[key];
    }

    const area1 : AreaString<{height: string;width:number}>={
        height: '100',
        width: 50
    }
}