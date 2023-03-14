// =================================
// Write a function "canSum(targetSum, numbers)" that takes in a targetSum and an array of numbers.
//
// The function should return a boolean indicating whether or not
// it is possible to generate the target sum using numbers from the array.
//
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.
//
// canSum(7, [5, 3, 4, 7]) => true
// canSum(7, [1, 2]) => false
// =================================

// === Classic ===
// O(n^m) - time. n - array length, m - target sum
// O(m) - space
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    if (canSum(targetSum - num, numbers)) {
      return true;
    }
  }

  return false;
};

console.log(canSum(10, [5, 3, 4, 7]));
console.log(canSum(7, [1, 2]));

// === Dynamic Programming =>
// === Memoization ===
// O(m*n) - time
// O(m) - space

const canSumMemoization = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSumMemoization(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSumMemoization(300, [1, 14]));
console.log(canSumMemoization(7, [1, 2]));
