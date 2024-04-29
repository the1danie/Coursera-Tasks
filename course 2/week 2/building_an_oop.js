class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(){
        this.energy += 10
        console.log(this.energy)
    }
    doSomethingFun() {
        this.energy -= 10
    }
}

class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log(this.xp)
    }
}


function intern() {
    const bob = new Worker(0, 10, "Bob", 21, 110);
    return bob;
}

const bobTheIntern = intern();
bobTheIntern.goToWork()
console.log(bobTheIntern);

function manager() {
    const Alice = new Worker(100, 30, "Alice", 30, 120);
    return Alice;
}

const AliceManager = manager();
AliceManager.doSomethingFun()
console.log(AliceManager);

