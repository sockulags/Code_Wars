function squareDigits(num){
    return Number((num+"").split('').map(i=>i*i).join(''));
  }