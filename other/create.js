Object.create = function(obj, propObj) {
  function a() {};
  a.prototype = obj || null;
  let b = new a();
  return Object.assign(b, propObj)
}


const t = Object.create({a:1})

console.log('====================================');
console.log(t);
console.log(t.a);
console.log('====================================');
