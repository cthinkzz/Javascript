// Write a function that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

function solution(A) {
  if (A && Array.isArray(A)) {
    const set = new Set(A);
    const arr = [...set];
    // remove negative integers
    const positive = arr.filter((item) => item > 0);
    let i = 1;
    while (i) {
      const idx = positive.findIndex((item) => item === i);
      if (idx === -1) {
        return i;
      }
      i++;
    }
  }
}

console.log(solution([-1, -3, 1, 2, 4]));
