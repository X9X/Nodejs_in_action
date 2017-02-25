Function.prototype.bind = Function.prototype.bind || function (context){
    var outerArgs = Array.prototype.slice.call(arguments,1);
    var me = this;
    var F = function (){};
    F.prototype = this.prototype;
    var bound = function (){
        if(typeof this !== 'function'){
            throw new Error('what is trying to be bound is not callable');
        }
        var innerArgs = Array.prototype.slice.call(arguments);
        var totleArgs = outerArgs.concat(innerArgs);
        me.apply(this instanceof F ? this : context || this, totleArgs);
    }
    bound.prototype = new F();
    return bound
}
