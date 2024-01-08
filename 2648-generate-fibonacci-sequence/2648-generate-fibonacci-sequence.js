/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let val = 1
    let prevVal = 0
    function calc() {
        let newValue = val + prevVal
        prevVal = val
        val = newValue
        return newValue

    }
    yield 0;
    yield 1;
    while (true) {
        yield calc()
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */