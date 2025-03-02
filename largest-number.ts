let arr = [1, 2, 3, 13, 5, 6, 7, 8, 9, 10, 11, 12];

let getLargest = arr.sort((a, b) => b - a)[0];

console.log(getLargest);

function findLarget(...num: number[]): number | undefined {
  let max: number = num[0];
  for (let i: number = 1; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}

console.log(findLarget(1, 2, 5, 15, 7, 8, 9, 10));
