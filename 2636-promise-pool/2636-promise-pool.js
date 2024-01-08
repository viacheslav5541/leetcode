/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */

var promisePool = async function(functions, n) {
    let i=0;
    // Execute current function and call next function
    const next = async () => {
        const fn = functions[i++]
        if(fn) {
            await fn();
            return next();
        }
    }

    // Execute n function at once
    return Promise.all(Array(n).fill().map(next));
};


/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */