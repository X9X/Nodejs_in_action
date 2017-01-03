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
import Person from './es6/Person';
import Vue from 'vue';
console.log(2);
const person = new Person('yang',27,{home:'fy'});
console.log(Person.isTeen(person.age));
console.log(person.introSelf());

const vm = new Vue({
    el : '#app',
    data : {
        msg : 'hello'
    },
    created:function(){
    }
})
