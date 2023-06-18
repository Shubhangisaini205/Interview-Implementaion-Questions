//Closures

//1. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// 2.
// A closure is a function having access to the parent scope, even after the parent function has closed.

//lexical Scope
// lexical scope refers to the ability of a function scope to access variables from the parent scope. When there is lexical scope, the innermost, inner and outermost functions may access all variables from their parent scopes all the way up to the global scope.


var sum = function (a) {
    //lexical scope
    
    console.log("Oky", a)
    let b = 3
    return (c) => {
        return a + b + c
    }
}
// let store = sum(8);
// console.log(store(4))

//another way
var sum2 = function (a,b,c) {
   return {
    getSumTwo:function(){
        return a+b
    },
    getSumThree:function(){
        return a+b+3
    }
   }
}
let store1 = sum2(1,2,3);
console.log(store1.getSumTwo())
console.log(store1.getSumThree())
