/**
 * Description
The transpose of a matrix is an operator which flips a matrix over its diagonal, 
that is it switches the row and column of the matrix by producing another matrix.
See the sample test case for a better understanding
So, given an array of n rows and m columns, generate the transpose of the matrix.
Input
Input Format:
The first line contains two integers n and m
あ Next n lines contain m integers which represent each row of the 2d array
Constraints:
n,m <= 500
Output
Print the transposed array
Sample Input 1
5 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
Sample Output 1
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
 */
let mat = [
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4]
]

let top = 0;
let bottom = mat.length - 1;
let left = 0
let right = mat[0].length - 1;
let ans = []
while (left <= right) {
    let bag = ""
   for(let i = top; i <=bottom; i++){
     bag+=mat[i][left] +" "
   }
   ans.push(bag)
   left++;
}
console.log(ans)
