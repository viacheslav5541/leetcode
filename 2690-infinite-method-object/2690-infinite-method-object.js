/**
 * @return {Object}
 */
 
var createInfiniteObject = function() {
    return new Proxy({}, {get: function(target, prop, receiver) {
        return () => prop
    }})
};


/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */