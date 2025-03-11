class MyPromise {
  constructor(executorFn){
    this._state = 'pending';
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];
    executorFn(this.resolverFn.bind(this),
    this.rejectorFn.bind(this))
  }

  then(cb){
    this._successCallbacks.push(cb);
    return this;
  }
  catch(cb){
    this._errorCallbacks.push(cb);
    return this;
  }
  finally(cb){
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFn(value){
    this._state = 'fulfilled';
    this._successCallbacks.forEach((cb)=> cb(value));
    this._finallyCallbacks.forEach((cb)=> cb());
  }

  rejectorFn(err){
    this._state = 'rejected';
    this._errorCallbacks.forEach((cb) => cb(err));
    this._finallyCallbacks.forEach((cb)=> cb());
  }
}

function wait(seconds){
  const p = new MyPromise((resolve,reject) => {
    setTimeout(() => reject("Error try again"), seconds * 1000);
  });
  return p;
}

wait(5) // Just for reference 5 Seconds
.then((e)=> console.log("Promise resolved after 5 sec",e))
.catch((e)=> console.log("Rejected after 5 seconds",e))
.finally(()=> console.log("I will run each time"))
