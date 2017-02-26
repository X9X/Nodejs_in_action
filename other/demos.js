var isArray = Array.isArray || function (arr){
    return Object.prototype.toString.call(arr) === '[object Array]'
}

//es6
function unique1(arr){
    return [...new Set(arr)]
    //return Array.from(new Set(arr))
}
//es5
function unique2(arr){
    let map = {};
    arr.filter(item => {
        return map[item] ? false : map[item] = true;
    })
}
function unique2(arr){
    if(!isArray(arr)){
        return ;
    }
    let map = {};
    let res = [];
    for(var i = 0,len = arr.length;i < len; i++){
        if(!map[arr[i]]){
            map[arr[i]] = arr[i];
            res.push(arr[i])
        }
    }
    return res
}

Function.prototype.bind = Function.prototype.bind || function (context){
    let args = Array.prototype.slice.call(arguments,1);
    let me = this;
    function F(){}
    F.prototype = this.prototype;
    var bound = function (){
        if(typeof this !== 'function'){
            throw new Error('what to be bound is not callable...')
        }
        let innerArgs = Array.prototype.slice.call(arguments);
        let totalArgs = args.concat(innerArgs);
        me.apply(this instanceof F ? this : context || this, totalArgs);
    }
    bound.prototype = new F();
    return bound;
}
// indexOf polyfill
Array.prototype.indexOf = Array.prototype.indexOf || function (val){
    if(!val || this.length === 0) return -1;
    let len = this.length;
    for(let i = 0; i < len; i++){
        if(this[i] === val) return i;
    }
    return -1
}


//no-recursive
function fib(n){
    var res = [1,1]
    for(let i = 2; i < n + 1; i++){
        res[i] = res[i - 1] + res[ i - 2];
    }
    return res[n];
}

//recursive
function fib(n){
    let res = [1, 1];
    if(n < 2){
        return res[n]
    }
    return fib(n - 1) + fib ( n - 2 )
}

//recursive with tail call
function fib(n , ac1 = 1, ac2 = 1){
    if(n <= 1){
        return ac2
    }
    return fib(n - 1, ac2 , ac1 + ac2);
}
