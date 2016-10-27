import Son from './Son'
import Mother from './Mother'
import Father from './Father'
import Father from './Father'
import Family from './Family'
import GeBiLaoWang from './GeBiLaoWang'

const name1 = [
        'John', 'Tom', 'Jimmy', 'Tom', 'James'
    ],
    name2 = [
        'Will', 'Harward', 'Paul', 'Tom', 'James'
    ],
    mother = new Mother('Jane', name1),
    father = new Father('Smith', name1),
    family = new Family(father, mother),
    laowang = new GeBiLaoWang('laowang',family)

    console.log(mother,father,family,laowang)
