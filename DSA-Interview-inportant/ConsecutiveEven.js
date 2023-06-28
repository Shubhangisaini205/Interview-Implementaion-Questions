/**
 * Description
Given an array A with n integers, find out whether if there exist three consecutive 
elements in the given array which are even.
Print "Yes" if exists, else "No".
Input
The first line of the input contains one integer t (1 st≤ 100) - the num ber of 
test cases. Then t test cases follow.
The first line of each test case contains a single integer n (3 ≤ n ≤ 100 0) - 
the number of elements in the array A.
The second line of each test case contains n integers (1 ≤ i ≤1000).
Output
For each test case, print the answer.
Sample Input 1
2
3
1 2 3
5
1 2 4 6 8
Sample Output 1
No
Yes
 */
let arr = [1,2,3,4,8];
let n = arr.length
let j = 0;
let temp = []
while(j <n){
    if(arr[j]%2==0){
        temp.push(arr[j]);
    }else{
        temp = []
    }
  if(temp.length == 3){
     console.log("YES")
     return;
  }
  j++;
}
console.log("No")