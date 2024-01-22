function narcissistic(value) {
    let y = value.toString().length;
    return value == parseFloat(value.toString().split('').reduce((a, b) => a + parseFloat(b) ** y, 0));
}