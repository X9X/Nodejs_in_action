
function CodingMan(name) {
  function CodingMan(name) {
    this.name = name;
    this._tasks = [];
    this.sayHi();
  }

  CodingMan.prototype = {
    wake(seconds) {
      console.log(`wake up after ${seconds}`);
    },
    sleep(seconds) {
      this._tasks.push(() => {
        setTimeout(() => this.wake(seconds), seconds)
      })
      return this;
    },
    sleepFirst(seconds) {
      this._tasks.unshift(() => {
        setTimeout(() => this.wake(seconds), seconds);
      })
    },
    eat(meal) {
      this._registerTask(() => {
        console.log(`Eat ${meal}`);
      })
      return this;
    },
    sayHi() {
      this._registerTask(() => {
        console.log(`Hi, this is ${this.name}`);
      })
      return this;
    },
    _registerTask(task, args) {
      this._tasks.push(() => {
        setTimeout(() => {
          task();
        });
      })
    },
    _runTasks() {
      this._tasks.forEach(task => task())
    }
  }
  return new CodingMan(name)
}

// CodingMan('peter');
CodingMan('peter').sleep(3).eat('dinner');
