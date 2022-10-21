function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    return (function anyThing(){
        console.log("Hi!")
    })
}

function returnsAnAnonymousFunction () {
    return (function () {
        
    })
} 
