function flatArray(arr) {
  var result = [];
  arr.map((vl) => {
    if (typeof vl === "object") {
      result = result.concat(flatArray(vl));
    } else {
      result.push(vl);
    }
  });
  return result;
}

let abc = flatArray([1, [2, [3, 4], 5, [9, 8]], 9, [6, [7, 0], 7]]);

console.log(abc);
