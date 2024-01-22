function factorial(n) {
    if (n < 0) {
        return null;
    }
    let result = [1];

    for (let i = 2; i <= n; i++) {
        result = multiply(result, i);
    }

    return result.join('').split('').reverse().join('');
}

function multiply(arr, num) {
    let carry = 0;

    for (let i = 0; i < arr.length; i++) {
        let product = arr[i] * num + carry;
        arr[i] = product % 10;
        carry = Math.floor(product / 10);
    }

    while (carry > 0) {
        arr.push(carry % 10);
        carry = Math.floor(carry / 10);
    }

    return arr;
}
