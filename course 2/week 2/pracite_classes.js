// class Animal {
//     constructor(typeAnimal, howMuch, doYouHave) {
//         this.typeAnimal = typeAnimal;
//         this.howMuch = howMuch;
//         this.doYouHave = doYouHave;
//     }
//     doYouHaveAnimal() {
//         this.doYouHave = !this.doYouHave;
//     }
//     checkAnimal() {
//         console.log("Are you sure the have animal?", this.doYouHave)
//     }

//     prototypeObject() {
//         console.log(Object.getPrototypeOf(this))
//     }
// }

// class Cat extends Animal {
//     constructor(tigerOrCat, legs, typeAnimal, howMuch, doYouHave) {
//         super(typeAnimal, howMuch, doYouHave)
//         this.tigerOrCat = tigerOrCat;
//         this.legs = legs;
//     }
//     voidAnimal() {
//         super.doYouHaveAnimal();
//         super.checkAnimal();
//         console.log(this.doYouHave)
//     }

// }
// var myAnimal = new Animal("Bear", 2, true);
// myAnimal.doYouHaveAnimal()
// myAnimal.checkAnimal()
// myAnimal.prototypeObject()

// var Cats = new Cat("Tiger", 5, "cats", 4, true)
// Cats.voidAnimal()


class Animal {
    constructor(color, energy) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        this.energy -= 1;
        if (this.energy <= 0) {
            console.log("You hit -1exp, you energy =", this.energy)
            this.sleep()
        } else {
            console.log("FIGHT! Your energy have", this.energy)
        }
    }
    sleep(){
        console.log("please you need to sleep")
    }
    getColor(){
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(color, energy, sound, canFly) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound){
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    makeSound() {
        if (this.houseCatSound == true) {
            super.makeSound()
        } else {
            console.log(this.houseCatSound)
        }
    }
}

class Tiger extends Cat {
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, tigerSound ) {
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.tigerSound = tigerSound;
    }
    makeSound() {
        if (this.tigerSound == true) {
            super.makeSound()
        } else {
            console.log(this.tigerSound)
        }
    }
}

class Parrot extends Bird {
    constructor(color, energy, sound, canFly, canTalk ){
        super(color, energy, sound, canFly);
        this.canTalk = canTalk;
    }
    makeSound() {
        if (this.canTalk == true) {
            super.makeSound()
        } else {
            console.log(this.canTalk)
        }
    }
}

