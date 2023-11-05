{
    //conditional types
    type a1 = null;
    type b1 = undefined;
    type x = a1 extends null ? true : false; //conditional type
   
    type y = a1 extends null ? true : b1 extends undefined ?
    undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    //key of Sheikh "bike" | "ship" | "car";

    // whether he has car/bike or ship
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<"car">; //true
    type HasShip = CheckVehicle<"ship">; //true
    type HasTractor = CheckVehicle<"tractor">; //false
    type HasPlane = CheckVehicle<"plane">; //true

}