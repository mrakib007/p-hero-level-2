{
    //oop -> class
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        //parameter properties

        constructor(public name: string, public species: string, public sound: string,){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        //this; doesn't work inside arrow function.
        makeSound(){
            console.log(`The ${this.name} has ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepeherd","Dog","Bark");
    const cat = new Animal("Persian","Cat","Miwao");

    cat.makeSound();
    dog.makeSound();


}