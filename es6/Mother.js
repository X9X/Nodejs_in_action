import  Person from './Person'
class Mother extends Person {
    constructor(first_name, sons=[]) {
        //remove duplicated names
        this.sons = [...new Set(sons)]
        this.first_name = first_name
    }
    static yell(){
        console.log('Oh, sweetie...')
    }
    printNames (){
        for (let name of this.sons){
            console.log(`${name}\n`);
        }
    }
}
