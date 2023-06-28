/**
 * Unites Share Crop. has N seats for its employees. All the N seats are located in 
a straight line at positions x1, x2,...xN
The company has only C employees and they don't like each other. To prevent the 
employees from arguing with each other, United Share Corp., wants to assign the 
employees to the seats, such that the minimum distance between any two of them is 
as large as possible. 
Your task is to write a program that calculates the largest minimum distance.

Input Description
Input Format
t-the number of test cases, then t-test cases follow.
For each test case:
Line 1: Two space-separated integers: N and C
Next N lines contain seat location, xi

Constraints
2<=N<=100,000
0<=xi<=10000000
2<=C<=N

Output Description
For each test case output one integer: the largest minimum distance.

Sample Input
1
5 3
1
2
8
4
9

Sample Output
3
 */

function calculateLargestMinimumDistance(seatPositions, C) {
    seatPositions.sort((a, b) => a - b); // Sort seat positions in ascending order
  
    let left = 1; // Minimum possible distance
    let right = seatPositions[seatPositions.length - 1] - seatPositions[0]; // Maximum possible distance
    let largestMinimumDistance = 0;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); // Calculate mid distance
      let count = 1; // Number of employees assigned
  
      let prevPosition = seatPositions[0];
  
      for (let i = 1; i < seatPositions.length; i++) {
        if (seatPositions[i] - prevPosition >= mid) {
          count++; // Assign employee to current seat position
          prevPosition = seatPositions[i];
        }
      }
  
      if (count >= C) {
        // If we can assign C or more employees with minimum distance mid
        largestMinimumDistance = mid;
        left = mid + 1; // Look for larger minimum distance
      } else {
        right = mid - 1; // Look for smaller minimum distance
      }
    }
  
    return largestMinimumDistance;
  }
  
  // Example usage
  

