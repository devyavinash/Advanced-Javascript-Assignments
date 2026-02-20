// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


function retryOnce(fn) {
  return function(...args){
    const callback=args.pop();
    fn((err,result)=>{
      if(result)
        callback(null,result)
      fn((err,result)=>{
        if(result)
          callback(null,result)
        else
          callback(err,null)
      })
    })
    
  }
}

module.exports = retryOnce;