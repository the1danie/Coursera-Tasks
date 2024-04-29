// const fruits = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }
// fruits.forEach(appendIndex);

// const fruits2 = ['kiwi','mango','apple','pear'];
// fruits2.forEach(function(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// })

// const nums = [0,10,20,30,40,50];
// nums.filter( function(num) {
//     return num > 20;
// })


// [0,10,20,30,40,50].map( function(num) {
//     return num / 10
// })

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)