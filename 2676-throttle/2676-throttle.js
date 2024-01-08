/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let saved = null;
    let int; 
    return function(...args) {
        if(!int) {
            fn(...args)
            int = setInterval(()=> {
                if(!saved) {
                   return int = clearInterval(int)
                }
                fn(...saved);
                saved = null;
                },t)
        }
        else {
            saved = args;
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */