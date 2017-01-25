function plus(num, init = 0) {
    let total = num + init;
    let foo = function(a) {
        return plus(a, total)
    }
    foo.toString = function() {
        return total
    }
    return foo
}
