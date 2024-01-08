/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const obj = {}
    return function(...args) {
        const kek = JSON.stringify(args)
        if( typeof obj[kek] === 'number') {
            return obj[kek]
        } else {
            const result = fn(...args)
            obj[kek] = result
            
            return result
        }  
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */