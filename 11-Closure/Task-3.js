/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

function createFibonacciGenerator() {
    
    function fib(){
        if (obj.count === 1) {
            obj.count++;
            return obj.number;
        } else if (obj.count === 2) {
            obj.count++;
            obj.prevNumber = 1;
            return obj.number;
        } else {
            obj.count++;
            let temp = obj.number;
            obj.number = obj.number + obj.prevNumber;
            obj.prevNumber = temp;
            return obj.number;
        }
    }

    let obj = {

        number: 1,
        count: 1,
        prevNumber: 0,

        print: function() {
            return fib();
        },

        reset: function() {
            this.number = 1;
            this.prevNumber = 0;
            this.count = 1;
        }
    }
    return obj;
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 5
console.log(generator1.print()); // 3
console.log(generator1.print()); // 8
console.log(generator1.print()); // 13
console.log(generator1.print()); // 21
console.log(generator1.print()); // 55
console.log(generator1.print()); // 34
console.log(generator1.print()); // 89
console.log(generator1.print()); // 144
console.log(generator1.print()); // 233
console.log(generator1.print()); // 377
console.log(generator1.print()); // 610
console.log(generator1.print()); // 987
console.log(generator1.print()); // 1597
console.log(generator1.print()); // 2584
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();
console.log('\n');

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;