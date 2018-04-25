// function map(b) {
//   b.a = 1;
//   b = {
//     a: 2
//   }
// }
// var obj = {
//   a: 0
// }
// map(obj)
// console.log('====================================');
// console.log(obj.a);
// console.log('====================================');

Array.prototype.map = function(handler) {
  return this.reduce((result, item, index) => {
    result.push(handler(item, index, this))
    return result
  }, []);
}
var s = [1, 2, 3];

console.log('====================================');
console.log(s.map((item, index, array) => item + index + array.length));
console.log('====================================');


