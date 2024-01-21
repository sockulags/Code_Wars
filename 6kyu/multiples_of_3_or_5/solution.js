function solution(number){
    if( number <= 3){
      return 0;
    }
    const multiples = [];
    for(let x = 1; x < number; x++){
      if(x % 3 === 0 || x % 5 === 0){
        multiples.push(x)
      }
    }
    return multiples.reduce((a,b) => a+b)
  }