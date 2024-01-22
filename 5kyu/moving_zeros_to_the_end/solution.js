function moveZeros(arr) {
    let arr2 = arr.filter(zeros => zeros !== 0);
    let missingZeros = arr.length - arr2.length;
    for(let x = 0; x < missingZeros; x++){
    arr2.push(0)  
    }  
    return arr2;
  }