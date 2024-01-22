function sumPairs(ints, s) {
    let seen = new Set();  
    for(let num of ints){
      let compliment = s- num    
      if(seen.has(compliment)){
        return [compliment,num]
      }
      seen.add(num)
    }  
    return undefined;
  }