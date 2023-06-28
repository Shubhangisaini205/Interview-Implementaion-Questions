/*
Given an array A of size n of positive and negative integers, find a subarray 
(containing at least one number) with the maximum product.

input Description 
The first line of the input contains one integer t (1<=t<=10) - the number of 
test cases. Then t test cases follow.
The first line of each test case contains a single integer n (1<=n<=100000).
The second line of the test case contain n integers(-100<=Ai<=100)

Output Description
For each test case, print the answer: The maximum product possible.

Sample Input 1
2
3
-3 0 -2
4
4 5 -1 2

Sample Output 1
0
20
 */

let arr = [4,5,-1,2];

let max = -Infinity;
for(let i = 0; i < arr.length; i++){
    let prod = 1;
    for(let j = i; j <arr.length; j++){
        prod *=arr[j];
        max = Math.max(prod,max)
    }

}
console.log(max)