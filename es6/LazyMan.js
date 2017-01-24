function Queue(){
    this.todos = [];
}
function Todo (func,argv){
    this.func = func;
    this.argv = argv
}
Queue.prototype = {
    run : function(){
        if(this.todos.length){
            let todo = this.shift();
            todo.func(todo.argv)
        }
    },
    push : function(thing){
        this.todos.push(thing)
    },
    shift : function(){
        return this.todos.shift();
    },
    unshift : function(thing){
        this.todos.unshift(thing)
    }
}
function Man(name){
    this.name = name;
    this._todos = new Queue();
    this.subscribe('introSelf')
    setTimeout(function(){
        this._todos.run()
    }.bind(this),0)
}
var behavior = {
    sleep : function(seconds){
        setTimeout(function(){
            console.log(`Wake up after ${seconds}s`);
            this.run();
        }.bind(this),seconds * 1000)
    },
    eat : function(meal){
        console.log(`eating ${meal}`);
        this.run();
    },
    sleepFirst : function(seconds){
        setTimeout(function(){
            console.log(`Wake up after ${seconds}s`);
            this.run();
        }.bind(this),seconds * 1000)
    },
    introSelf:function(){
        console.log(`Hi, this is ${this.name}`);
        this.run();
    }
}
Man.prototype = {
    subscribe:function(func,argv){
        if(func === 'sleepFirst'){
            this._todos.unshift(new Todo(behavior[func].bind(this),argv))
        } else {
            this._todos.push(new Todo(behavior[func].bind(this),argv))
        }
    },
    sleep : function(seconds){
        this.subscribe(arguments.callee.name,seconds)
        return this
    },
    eat : function(meal){
        this.subscribe(arguments.callee.name,meal)
        return this
    },
    sleepFirst : function(seconds){
        this.subscribe(arguments.callee.name,seconds)
        return this
    },
    run : function(){
        this._todos.run()
    }
}
function LazyMan(name){
    return new Man(name)
}
