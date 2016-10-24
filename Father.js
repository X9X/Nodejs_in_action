import  Person from './Person'
class Father extends Person {
    constructor(first_name, sons=[]) {
        this.sons = [...new Set(sons)]
        this.first_name = first_name
    }
    hasSonCalled(name){
        return this.sons.indexOf(name) > -1
    }
    static yell(){
        console.log('SB...')
    }
}
