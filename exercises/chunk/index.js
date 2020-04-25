// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// 1. return chunked array
// 2. if no sub array, push array of first element, [ element ]
// 3. if sub array length is same with size, push new array of element [ element ]
// 4. OR push element into 

function chunk(array, size) {
  const chunked = [];
  for(let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  console.log(chunked);
  return chunked;
  // const chunked = [];
  
  // for (const elem of array){
  //   const nextSubArr = chunked[chunked.length - 1];
  //   if (!nextSubArr || nextSubArr.length === size) {
  //     chunked.push([elem]);
  //   } else {
  //     nextSubArr.push(elem);
  //   }
  // }
  // return chunked;

  // const result = [];
  // let buff = [];
  // let count = 1;
  // for(const num of array) {
  //   if (count < size) {
  //     buff.push(num);
  //     count++;
  //     continue;
  //   } else if (count === size) {
  //     buff.push(num);
  //     result.push(buff);
  //     buff = [];
  //     count = 1;
  //     continue;
  //   }
  // }
  // if (buff.length > 0) result.push(buff);
  // console.log(result);
  // return result;
}

module.exports = chunk;
