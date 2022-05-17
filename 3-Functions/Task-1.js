/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
function f(a){
    if(typeof a === 'number'){
        return console.log(a*a*a);
    } else {
        throw new Error('parameter is not a number type')
    }
}


/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

exports.f = f;
/* не удалять */

