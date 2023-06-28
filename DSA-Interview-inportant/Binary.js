/**
 Description
You are given a binary matrix of size NM A binary matrix is one which consists 
of only 1's and n' * c . You have to flip the matrix. Flipping the matrix means 
converting all 1's to 0's and all 0' * s to 1's.
Input
The first line of the input contains N and M, the dimensions of the matri
X.
The next N lines contain M space separated integers denoting the valu es of the 
matrix.
Constraints
1 <= N, M <= 100
0 <= A[i][j] <= 1
Output
Print the matrix after flipping it, as shown in the sample test case.
Sample Input 1
3 2
1 0
0 1
1 1
Sample Output 1
0 1
1 0
0 0
 */
let mat = [
    [1, 0],
    [0, 1],
    [1, 1]
]

for(let i = 0; i <mat.length; i++){
    for(j = 0; j <mat[0].length; j++){
        if(mat[i][j]===0){
            mat[i][j]=1
        }else{
            mat[i][j]=0
        }
    }
}
console.log(mat)