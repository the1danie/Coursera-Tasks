// function testBracketsDynamicAccess() {
//     var dynamicKey;
//     if(Math.random() > 0.5) {
//       dynamicKey = "speed";
//      }else{
//        dynamicKey = "color";
//      }
  
//       var drone = {
//         speed: 15,
//         color: "orange"
//       }
  
//       console.log(drone[dynamicKey]);
//   }
//   testBracketsDynamicAccess();

const car = {
    engine: true,
    steering: true,
    speed: 'slow'
};

for (const key of Object.keys(car)) {
    console.log(key, car[key]);
}

car.fast = 'faster';
console.log(car.fast);
console.log("---------------------");

const car2 = Object.create(car);
car2.another = false;

console.log(car2)
console.dir(car2);
