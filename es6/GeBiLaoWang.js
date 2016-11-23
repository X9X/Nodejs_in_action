import Person from './Person'
class GeBiLaoWang extends Person {
    constructor(name, family) {
        this.name = name;
        this.family = {
            family,
            proxy: new Proxy(family, {
                get: function(target, key, receiver) {
                    console.log(`getting ${key}!`);
                    return Reflect.get(target, key, receiver);
                },
                set: function(target, key, value, receiver) {
                    console.log(`setting ${key}!`);
                    return Reflect.set(target, key, value, receiver);
                }
                has() {
                    return false
                }
            })
        };
    }
    isMyChild(name){
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,2000,true)
        })
    }
}
