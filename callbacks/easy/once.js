// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
  let called=false;
  let result=null;
  let error=null;
  let callbacks=[];
  return function(...args)
    {
      let callback=args.pop();
      if(called){
        callback(error,result);
      }
      callbacks.push(callback);
      if(callbacks.length==1)
      {
        fn(...args,(err,data)=>{
          called=true;
          result=data;
          error=err;
          callbacks.forEach(cb=>{cb(err,data)})
        })
      }
    }
}

module.exports = once;
