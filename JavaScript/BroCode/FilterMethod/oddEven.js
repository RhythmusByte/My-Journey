let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

function isEven(x) {
    return x % 2 === 0;
}

function isOdd(y) {
    return y % 2 !==0;
}

console.log(evenNums);
console.log(oddNums);
