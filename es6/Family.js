import Person from './Person'
import Father from './Father'
import Mother from './Mother'
class Family{
    constructor(father,mother) {
        this.father = father;
        this.mother = mother;
        // all sons
        this.sons = [...new Set([...mother.sons,...father.sons])];
    }
    static hasRelation(father,mother){
        var m_sons = new Set(mother.sons)
        return  new Set([...father.sons].filter(x => m_sons.has(x))).size > 0;
    }
    slogan(){
        console.log('We are family !');
    }
}
