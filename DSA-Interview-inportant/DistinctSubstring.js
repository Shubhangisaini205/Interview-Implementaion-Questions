/*Given a string of length n, find out the number of distinct substrings possible from the given string. */

let str = "aaaa"
let count = 0
for(let i = 0; i <str.length; i++){
    let bag =""
    for(let j = i; j <str.length; j++){
bag+=str[j];
// console.log(bag)
let set  = new Set(bag);
if(bag.length==set.size){
    count++
}

    }
}
console.log(count)



