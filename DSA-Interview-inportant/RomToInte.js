let s = "MCMXCIV";
let output = 1994
let roman = ["I", "V", "X", "L", "C", "D", "M"];
let value = [1, 5, 10, 50, 100, 500, 1000]
let obj = {};
for (let i = 0; i < roman.length; i++) {
    obj[roman[i]] = value[i];
}
let sum = 0;
for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) { 
        sum = sum - obj[s[i]];
    } else {
        sum = sum + obj[s[i]]; 
    }
}
console.log(sum)
