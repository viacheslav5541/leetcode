/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
   this.value = nums
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.value.reduce((acc,val) => acc+val ,0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.value}]`
}
