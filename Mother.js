import  Person from './Person'
class Mother extends Person {
    constructor(first_name, sons=[]) {
        this.sons = [...new Set(sons)]
        this.first_name = first_name
    }
    sonNum (){
        return this.sons.length
    },
    sonNames (){
        return this.sons
    }
    hasSonCalled(name){
        return this.sons.has(name)
    }
    static yell(){
        console.log('SB...')
    }
}
