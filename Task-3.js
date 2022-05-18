/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(content, times){
    if (!(arguments.length === 2)) {
        throw new Error('Function should take 2 argument');
    } else if ((['number', 'object', 'string'].every(value => value !== typeof content)) || Array.isArray(content)) {
        throw new Error('First argument should be type of Number, Array, String or Object');
    } else if (typeof times !== 'number'){
        throw new Error('Second argument should be a Number')
    }
    let array = new Array(times);
    array.fill(content);
    return array;
}


const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;

