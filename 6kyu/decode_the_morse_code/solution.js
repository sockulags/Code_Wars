decodeMorse = function(morseCode){
    let sentence = "";
    morseCode.split(' ').forEach(x=> sentence += MORSE_CODE[x] || ' ');
    sentence = sentence.replace(/\s+/g, ' ')
    return  sentence.trim();  
  }