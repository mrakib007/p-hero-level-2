{
    //generic constraint using key of
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship" //manually

    type Owner2 = keyof Vehicle;

    const getPropertyValue = <X,Y extends keyof X> (obj: X,key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Rakib',
        age: 26,
        address : 'Dhaka',
    }
    
    const car = {
        model: 'Volvo',
        year: 200,
    }

    const result = getPropertyValue(user,'name');
    const carValue = getPropertyValue(car,"model");

}