import Person from './es6/Person';

const person = new Person('yang',27,{home:'fy'});
console.log(Person.isTeen(person.age));
console.log(person.introSelf());
