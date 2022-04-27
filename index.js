function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function namedFunction() {
        return 'hi?'
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return 'hi again?'
    }
}