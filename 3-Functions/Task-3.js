/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(a, b, c){
    let result;
    if(typeof a === 'number' &&
        typeof b === 'number' &&
        typeof c === 'number'){
            result = (a - b) / c;
        } else {
            throw new Error('all parameters should be a Number type');
        }
    return console.log(result)
}
/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

exports.f = f;
/* не удалять */