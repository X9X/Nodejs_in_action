function isFn(fn) {
  return typeof fn === 'function'
}
class MyPromise {
  static resolve() {

  }
  static reject() {

  }
  constructor(fn) {
    const resolve = result => {
      this._resolve(result);
    }
    const reject = reason => {
      this._reject(reason)
    }
    this._status = 0; //0: pendding, 1: resolved, 2:rejected
    this._resolveCallback = null;
    this._rejectCallback = null;
    fn && fn(resolve, reject);
  }
  _resolve(result) {
    this._status = 1;
    if(this._resolveCallback) {
      setTimeout(() => {
        this._resolveCallback(result)
      });
    }
  }
  _reject(reason) {
    this._status = 2;
    if (this._rejectCallback) {
      setTimeout(() => {
        this._rejectCallback(reason)
      });
    }
  }
  _resiterCallback(callBackName, callBack, flushPromise) {
    if (isFn(callBack)) {
      this[`_${callBackName}`] = result => {
        const res = callBack(result);
        flushPromise(res);
      }
    }
  }
  then(resolveCallback, rejectCallback) {
    const newPromise = new MyPromise();
    const flushPromise = result => {
      newPromise._resolve(result)
    }
    this._resiterCallback('resolveCallback', resolveCallback, flushPromise);
    this._resiterCallback('rejectCallback', rejectCallback, flushPromise);
    return newPromise
  }
  catch(rejectCallback) {
    return this._then(null, rejectCallback);
  }
}

const p = new MyPromise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 100);
}).then(res => {
  return ++res
}).then(res2 => {
  console.log('====================================');
  console.log(res2);
  console.log('====================================');
})

