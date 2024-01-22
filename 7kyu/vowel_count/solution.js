const vowels = ["a", "e", "i", "o","u"];
function getCount(str) {
 return str.split('').filter(char=>vowels.includes(char)).length
}