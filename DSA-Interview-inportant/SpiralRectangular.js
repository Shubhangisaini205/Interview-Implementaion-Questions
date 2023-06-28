let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]

let top = 0;
let bottom = matrix.length - 1;
let left = 0;
let right = matrix[0].length - 1
let bag = ""
while (top <= bottom && left <= right) {
    for (let i = top; i <= bottom; i++) {
        bag += matrix[i][left] + " "
    }
    left++;
    if (left > right) break;
    for (let i = left; i <= right; i++) {
        bag += matrix[bottom][i] + " "
    }
    bottom--;
    if (top > bottom) break;
    for (let i = bottom; i >= top; i--) {
        bag += matrix[i][right] + " "
    }
    right--
    for (let i = right; i >= left; i--) {
        bag += matrix[top][i] + " "
    }
    top++;
}
console.log(bag)
