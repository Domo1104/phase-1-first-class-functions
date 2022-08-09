function receivesAFunction(spy) {
    return spy()
}

const returnsANamedFunction = () => {
    return function named() {

    }
}

const returnsAnAnonymousFunction = () => {return () => {}}