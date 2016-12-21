import 'babel-polyfill'
function *a(){
    yield 1;
    yield 2;
}
function *b(){
    yield 3;
    yield 4;
}
function *c(){
    yield* a();
    yield * b();
    yield 5
}
var e = c()
for (let i = 0;i < 10;i++){
    console.log(e.next());
}
