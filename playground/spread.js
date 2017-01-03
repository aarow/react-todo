// // function add(a, b) {
// //   return a + b;
// // }
// //
// // console.log(add(3,1));
// //
// // var toAdd = [9, 5];
// //
// // console.log(add(...toAdd))
//
// var groupA = ['Jen', 'Cory']
// var groupB = ['Vikram'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final)

var person = ['Aaron', 40]
var person2 = ['Amy', 43]

// hi aaron you are 40
function greeting(name, age) {
  console.log(`Hi ${name} you are ${age}`)
}

greeting(...person);
greeting(...person2);


var names = ['mike', 'Ben'];
var final = ['Aaron'];

// hi andrew loop\
final = [...final, ...names];
final.forEach((name) => {
  console.log(`Hi ${name} how are you?`)
})
