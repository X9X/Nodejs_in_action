import Person from './Person'
class Son {
    constructor(name,first_name,age) {
        this.name = name
        this.first_name = first_name
        this.age = age
    }
    full_name (){
        return this.name + ' ' + this.first_name
    }

}
