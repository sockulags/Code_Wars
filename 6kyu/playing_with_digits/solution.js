function digPow(n, p){
    let sum = 0;
  ((n+"").split("").forEach(nr => sum+= parseInt(nr)**p++));
    
    return sum % n === 0 ? sum / n : -1
  }