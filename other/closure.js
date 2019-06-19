function a() {
  var t = 1
  return {
    a() {
      return ++t
    }
  }
}

var b = a()

console.log('====================================');
console.log(b.a());
console.log(b.a());
console.log('====================================');
