// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during compilation. This allows variables to be accessed and functions to be called before their actual declarations appear in the code. However, only the declarations are hoisted, not the initializations or assignments.



// Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope automatically. This allows you to use variables and call functions before they are actually written in your code. Just remember that only the declarations move up, not the assignments or initializations.

console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

foo(); // Output: "Hello"

function foo() {
  console.log("Hello");
}


// In summary, var variables are hoisted and initialized with undefined, allowing them to be accessed before their declaration. let variables are hoisted but not initialized, resulting in a reference error if accessed before their declaration.