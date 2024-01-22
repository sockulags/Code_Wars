function topThreeWords(text) {
    const arr = text.toLowerCase().replace(/[^a-zA-Z0-9' ]/g, '').split(' ').filter(x=>x != "" && /[a-zA-Z]/.test(x));
   const wordCounts = arr.reduce((counts, word) => {
      counts[word] = (counts[word] || 0) + 1;
      return counts;
    }, {});
    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    if(sortedWords.length > 2){
      return sortedWords.slice(0,3)
    }
     else{
       return sortedWords
     }
  }