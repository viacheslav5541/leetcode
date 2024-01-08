var TimeLimitedCache = function () {
    this.obj = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    
    if (!!!this.obj[key] || this.obj[key] === -1) {
        this.obj[key] = value;
        setTimeout(() => this.obj[key] === value  ? this.obj[key] = -1 : void(0), duration)
        return false
    } else {
        this.obj[key] = value;
        setTimeout(() => this.obj[key] = -1, duration)
        return true
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    
    return (this.obj[key] === -1 || !!!this.obj[key])  ? -1 : this.obj[key]
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return Object.keys(this.obj).filter((key) => this.obj[key] !== -1).length
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */