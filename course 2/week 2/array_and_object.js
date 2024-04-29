var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDiary() {
    for (text in dairy) {
        console.log(dairy[text])
    }
}
logDiary()

console.log('----------------------------')
const animal = {
    canJump: true    
};
    
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan () {
    for (keys of Object.keys(bird)) {
        console.log(`Keys = ${keys}, Values = ${bird[keys]}`)
    }
}
birdCan()

function animalCan() {
    for (const keys in bird) {
        console.log(keys, bird[keys])
    }
}
animalCan()