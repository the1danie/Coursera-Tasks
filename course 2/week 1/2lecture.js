// var virtualPet = {
//     sleepy: true,
//     nap: function() {
//         this.sleepy = false
//     }
// }
// console.log(virtualPet.sleepy) // true
// virtualPet.nap()
// console.log(virtualPet.sleepy) // false

// var danieGenii = {
//     gey: false,
//     strong: function() {
//         this.gey = true
//     }
// }

// console.log(danieGenii.gey)
// danieGenii.strong()
// console.log(danieGenii.gey)

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

console.log(addTwoNums(getNumber(), getNumber()))