function spinWords(string){
    return string.split(" ").map(function(word){
      return word.length > 4 ? word.split("").reverse().join("") : word;
    }).join(' ');
  }