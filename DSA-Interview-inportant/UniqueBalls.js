/**
 
You are given N-balls. Each one of them has a number (K) printed on them Your 
need to find a number of ways of selecting two balls (unique pairs of indexes) 
having the same number printed on them, without considering the $ith$ ball, for 
each i.
Input Description
Input Format
First line two spaced integers, N and M, when N is the number of balls. and M is 
the maximum value of K which would be printed on the ball.
The second line contains N-spaced integers, a value printed on each ball.

Constraints
1≤N, M≤ $10^6$
1≤K≤M

Output Description
Print the total number of ways for selecting two different balls, without 
considering the current ball ($i-th$) on the new line.

Input
6 3
1 2 3 2 3 1

Output
2
2
2
2
2
2
 */
let arr = [1,1,1,2,2]
let obj = {};
for(let i = 0; i <arr.length; i++){
    obj[arr[i]]= (obj[arr[i]]||0)+1
}
for(let i = 0; i <arr.length; i++){
    obj[arr[i]]--;
    let count = 0
    for(let key in obj){
       let x = obj[key];
       count+=x*(x-1)*0.5
    }
    obj[arr[i]]++;
     console.log(count)
}
