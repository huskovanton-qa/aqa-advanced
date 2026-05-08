const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.reduce((acc, num) => acc + num, 0);

console.log(newNumbers);