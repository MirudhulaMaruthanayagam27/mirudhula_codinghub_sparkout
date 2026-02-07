//find maximum in array

function findMax(arr) {
  let m=arr[0];
  for(let i=0;i<arr.length;i++){
      if(arr[i]>m){
          m=arr[i];
      }
  }
  return m;
}

// Test case
console.log(findMax([3, 7, 2, 9, 1])); // 9