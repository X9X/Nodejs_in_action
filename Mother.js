import Person from './Person'
class Mother extends Person {
    Mother.gender = 'female'
    constructor(first_name, sons = []) {
        //remove duplicated names
        this.sons = [...new Set(sons)]
        this.first_name = first_name
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
    static yell() {
        console.log('Oh, sweetie...')
    }
    static classMethod() {
        return super.isTeen(18) + ', too';
    }
    printNames() {
        for (let name of this.sons) {
            console.log(`${name}\n`);
        }
    }
}
