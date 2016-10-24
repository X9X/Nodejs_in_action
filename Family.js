import Person from './Person'
import Father from './Father'
import Mother from './Mother'
class Family{
    constructor(father,mother) {
        this.father = new Father(father);
        this.mother = new Mother(mother);
        this.sons = sons;
    }
    static hasRelation(father,name){
        return  new Set([...a].filter(x => b.has(x))).size > 0;
    }
    static slogan(){
        console.log('We are family !');
    }
}
