/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

function f(...args){
    let sum = 0;
    for (let arg of args){
        if(typeof arg === 'number' ){
            sum += arg;
        } else {
            throw new Error('all parameters should be a Number type')
        }
    }
    return console.log(sum); 
}

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

exports.f = f;
/* не удалять */