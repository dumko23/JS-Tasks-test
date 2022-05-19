/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

const generateFibonacciNumber = createFibonacciGenerator();

function createFibonacciGenerator(){
    let number = 1;
    let prevNumber;

    let count = 1;
    
    return function (){
        if(count === 1){
            count++;
            return number;
       } else if(count === 2){
            count++;
            prevNumber = 1;
            return number;
       } else {
            count++;
            let temp = number;
            number = number + prevNumber;
            prevNumber = temp;
            return number;
       }
    }
}

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13
console.log(generateFibonacciNumber()); // 21
console.log(generateFibonacciNumber()); // 34
console.log(generateFibonacciNumber()); // 55
console.log(generateFibonacciNumber()); // 89
console.log(generateFibonacciNumber()); // 144
console.log(generateFibonacciNumber()); // 233
console.log(generateFibonacciNumber()); // 377
console.log(generateFibonacciNumber()); // 610
console.log(generateFibonacciNumber()); // 987
console.log(generateFibonacciNumber()); // 1597
console.log(generateFibonacciNumber()); // 2584

exports.createFibonacciGenerator = createFibonacciGenerator;