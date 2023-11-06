{
    //instance of guard
    class Animal {
        name: string;
        species: string;

        constructor(name:string,species:string){
            this.name = name;
            this.species = species;
        }
        makeSound(){
            console.log('Making some noise');
        }
    }

    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species);
        }
        makeBark(){
            console.log('I am barking');
        }
    }
    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species);
        }
        makeMeaw(){
            console.log('I am meawing');
        }
    }

    //smart way to hande  this is using funciton
    const isDog = (animal:Animal) : animal is Dog =>{
        return animal instanceof Dog
    }
    const isCat = (animal:Animal) : animal is Cat =>{
        return animal instanceof Cat
    }

    const getAnimal = (animal:Animal) => {
        // if(animal instanceof Dog){
        //     animal.makeBark();
        // }
        if(isDog(animal)){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }
    }
    const dog = new Dog("Dog","alsecian");
    const cat = new Cat("Cat","Persian");

    getAnimal(dog);
    getAnimal(cat);

}