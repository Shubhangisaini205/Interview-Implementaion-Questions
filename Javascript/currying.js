
// function Addition(a, b, c) {
//     return a + b + c
// }

// let res = Addition(2, 3, 4);
// console.log(res)



// function Addition1(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
//currying

// let result =  Addition1(2)(4)(7);
// console.log(result)




//Infinite currying;
function add(a) {
    return function(b){
       if(b) return add(a+b)
       return a
    }
}

// currying call can be infinite

console.log(add(3)(4)())

