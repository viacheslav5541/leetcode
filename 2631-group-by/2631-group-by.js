/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const obj = {}
    this.forEach(item => {
        res = fn(item)     
        if (!(res in obj)) obj[res] = [item]
        else obj[res].push(item)

    })
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */