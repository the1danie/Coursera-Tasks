// function doubleIt(num) {
//     return num * 2
// }
// function objectMaker(val) {
//     return {
//         prop: val
//     }
// }
// console.log(objectMaker( doubleIt(100) ))

let counter = 3;
function example() {
    console.log(counter);
    counter -= 1;
    if (counter === 0) return;
    example();
}

example()