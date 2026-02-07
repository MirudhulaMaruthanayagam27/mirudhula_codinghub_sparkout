//Program to removeduplicates in array


function removeDuplicates(arr) {
  //Arrays to store my result if the element already not present in this result array
  let res=[];
  
  //loop to check arrays duplicates
  for(let i=0;i<arr.length;i++){
      if(!res.includes(arr[i])){
          res.push(arr[i]);
      }
  }
  return res;
  
}

// Test case
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([9,8,8,10,10]));//[ 9, 8, 10 ]