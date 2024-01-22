function perimeter(n) {
    return 4*fib(n+1).reduce((a,b)=>a+b)
}

const fib = (n) => {
 const result = [];

 for (let i = 0; i <= n; i++) {
   if (i <= 1) {
     result.push(i);
   } else {
     result.push(result[i - 1] + result[i - 2]);
   }
 }
console.log(result)
 return result;
};