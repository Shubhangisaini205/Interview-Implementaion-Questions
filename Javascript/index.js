//memoization
let sum = 0;
function Calc(n) {
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
// console.time()
// console.log(Calc(5))
// console.timeEnd()
// by running this function all the time if we giving same input it is taking the time as in the first time, but if we have calculated the ans for input 5 so it should be store somewhere call Cache. The optimization technique is called memoization.

//we need to make on memoize function for  obtaining the optimization;

const memoize=(func)=>{
   let cache={};
   return function(...args){
    let n = args[0];
    if(n in cache){
        console.log(cache)
        console.log("Cache")
        return cache[n]
    }else{
        console.log("running for first time")
        let result = func(n);
       
        cache[n]= result;
        return result;
    }
   }
}

// Now we will call the Memoize function  which is return a function
//Calculting first time taking from else
console.time()
let optimized = memoize(Calc);
console.log(optimized(5))
console.timeEnd()

// calculating second time taking from if condition  from Cache
console.time()
console.log(optimized(5))
console.timeEnd()

