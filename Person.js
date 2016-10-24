export default class Person {
    constructor(name='张三',age=18,infos) {
        this.name = name;
        this.age = age;
        Object.keys(infos).forEach(k=>{this[k] = infos[k]});
    }
    static isTeen(age){
        return age <= 18
    }
    introSelf(){
        return `Hi. My name is ${this.name}, and I'm ${this.age} years old.`
    }
}
