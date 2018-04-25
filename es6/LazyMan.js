function Todo(func, argv) {
  this.func = func;
  this.argv = argv;
}
function Man(name) {
  this.name = name;
  this.todos = [];
  this.introSelf();
  setTimeout(() => this.runNext(), 0);
}
Man.prototype = {
  subscribe(func, first, ...argv) {
    this.todos[first ? 'unshift' : 'push'](new Todo(func, argv));
  },
  introSelf() {
    this.subscribe(() => {
      console.log(`Hi, this is ${this.name}`);
      this.runNext();
    });
    return this;
  },
  sleep(seconds, first) {
    this.subscribe(seconds => {
      setTimeout(() => {
        console.log(`Wake up after ${seconds}s`);
        this.runNext();
      }, seconds * 1000);
    }, first, seconds);
    return this;
  },
  eat(meal) {
    this.subscribe(meal => {
      console.log(`eating ${meal}`);
      this.runNext();
    }, 0, meal);
    return this;
  },
  sleepFirst(seconds) {
    this.sleep(seconds, 1)
    return this;
  },
  runNext() {
    if (this.todos.length) {
      let todo = this.todos.shift();
      todo.func.apply(this, todo.argv);
    }
  }
};
function LazyMan(name) {
  return new Man(name);
}
LazyMan("peter")
  .sleepFirst(3)
  .eat("dinner")
  .sleep(3)
  .eat("supper");
