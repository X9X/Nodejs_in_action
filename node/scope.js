// function foo(a, y = function(){return x}) {
//   var x = 3;
//   y();
//   console.log(x);
//   console.log(global.x);
// }

function a() {
  return x;
}

function b() {
  var x = 1;
  console.log(a());
}

b()
