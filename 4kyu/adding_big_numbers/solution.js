function add(a, b) {
    let result = "";
    let memory= 0;
    
    const maxLength= Math.max(a.length, b.length);
    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");
    
    for(let i = maxLength-1; i >=0; i--){
      const digitSum = parseInt(a[i]) + parseInt(b[i]) + memory;
      console.log(memory)
      memory = Math.floor(digitSum / 10);
    
      
      result= digitSum%10 + result;
      console.log(`This sum: ${digitSum}, memory: ${memory}, result ${result}`)
    }
    if(memory > 0){
      result = memory + result;
    }
    return result;
  }