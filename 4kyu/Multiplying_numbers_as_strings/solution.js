function multiply(a, b) {
    const numA = a.split('').map(Number).reverse();
    const numB = b.split('').map(Number).reverse();
  
    const result = Array(numA.length + numB.length).fill(0);
  
    //Multiply each digit with every digit in the other number. Do so for all positions. If number is over 10, overflow to the next posiiton of the array.
    for (let i = 0; i < numA.length; i++) {
      for (let j = 0; j < numB.length; j++) {
        result[i + j] += numA[i] * numB[j];
        if (result[i + j] >= 10) {
          result[i + j + 1] += Math.floor(result[i + j] / 10);
          result[i + j] %= 10;
        }
      }
    }
  
    while (result.length > 1 && result[result.length - 1] === 0) {
      result.pop();
    }
  
    return result.reverse().join('');
  }