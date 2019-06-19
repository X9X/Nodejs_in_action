let a = 2, b = 3;

// a = a + b;

// b = a - b;

// a = a - b;
a = a ^ b;  // a: 10  b: 11   a ^ b = 01

b = a ^ b;  // a: 01  b: 11   a ^ b = 10

a = a ^ b;  // a: 01  b: 10   a ^ b = 11

console.log('====================================');
console.log(a, b);
console.log('====================================');

// [a, b] = [b, a]

// function flat(arr) {
//   return arr.toString().split(',').map(item => parseInt(item, 10))
// }
// const isArray = a => {
//   return Object.prototype.toString.call(a) === '[object Array]'
// }
// function flat2(arr) {
//   let res = [];
//   arr.forEach(item => {
//     if (!isArray(item)) {
//       res.push(item)
//     } else {
//       res = res.concat(flat2(item))
//     }
//   })
//   return res
// }
// var s = [1,2,3,4,[7,[2],5],6,6];

// console.log('====================================');
// console.log(flat2(s));
// console.log('====================================');
