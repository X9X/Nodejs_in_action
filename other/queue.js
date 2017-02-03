/**
 * [procedure description]
 * @param  {[Queue]} Q [init queue]
 * @return {[Array]}   [output array]
 */
function procedure(Q){
    let out = [];
    while(!Q.empty()){
        let x = Q.front();
        Q.pop();
        Q.push(x);
        x = Q.front();
        out.push(x);
        Q.pop()
    }
    return out
}
/**
 * [antiProcedure description]
 * @param  {[Array]} outputList [output number list]
 * @return {[Array]}            [input number list]
 */
function antiProcedure(outputList){
    let input = [];
    let out = outputList.reverse();
    while(out.length > 0){
        let num = out.shift();
        input.unshift(num);
        input.unshift(input.pop());
    }
    return input
}
function Queue(data){
    this.data = data ? data.slice() : [];
}
Queue.prototype = {
    front : function (){
        return this.data[0]
    },
    push : function(x){
        this.data.push(x)
    },
    pop : function(x){
        return this.data.shift()
    },
    empty : function(){
        return this.data.length === 0
    }
}

var queue = new Queue([1,2,3,4,5,6,7])
procedure(queue)
antiProcedure([2,4,6,1,5,3,7])
