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
