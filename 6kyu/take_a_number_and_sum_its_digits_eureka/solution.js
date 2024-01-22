function sumDigPow(a, b) {
    let eureka = []
    for(let x =  a; x < b; x++){
      if(x < 10){
        eureka.push(x);   
      }
      else{
        let power = 1;
        let sum = 0;
        x.toString().split('').forEach(nr=>sum+= parseInt(nr)**power++);
        if(sum === x){
          eureka.push(x) 
        }
      }
    }
    return eureka;
  }