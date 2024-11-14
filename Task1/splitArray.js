function chunkArray(array, size) {
  let splitArray = [];
  for (let i = 0; i < array.length; i += size) {
    splitArray.push(array.slice(i, i + size));
  }
  return splitArray;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6],[7, 8]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6],[7, 8]]
