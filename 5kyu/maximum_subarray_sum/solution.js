var maxSequence = function(arr){
    if(arr.length === 0)
  return 0;
   let maxEndingHere = Math.max(arr[0], 0);
    let maxSoFar = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  return maxSoFar < 0 ? 0 : maxSoFar;
    }