function asyncRun (index = 0){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('hello world ' + index);
            index !== 2 ? resolve('hello world ' + index) : reject('index equals to 2')
        },2000)
    })
}


var p = asyncRun();
p.then(function(data){
    console.log(data);
    return asyncRun(1)
}).then(function(data){
    console.log(data);
    return asyncRun(2);
}).then(null,function(reason){
    console.log(reason);
})
