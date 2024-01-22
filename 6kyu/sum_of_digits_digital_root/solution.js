function digitalRoot(n) {
    return roots(n.toString().split(''))
    }
    function roots(arr){
      let sum = 0;
      arr.forEach(x=>sum += parseInt(x));  
      return sum.toString().length > 1 ?  roots(sum.toString().split('')) : sum;
      }