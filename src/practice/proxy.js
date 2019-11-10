{
    // ES6
    let Person = {
        name: 'es6',
        sex: 'male',
        age: 15
    };

    let person = new Proxy(Person, {
        get(target, key) {
            return target[key]
        },
        set(target,key,value){
            if(key!=='sex'){
                target[key]=value;
            }
        }
    });

    console.table({
        name:person.name,
        sex:person.sex,
        age:person.age
    });

    try {
        person.sex='female';
    } catch (e) {
        console.log(e);
    } finally {

    }

}