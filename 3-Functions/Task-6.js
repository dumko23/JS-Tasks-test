/**
 * Задача 6.
 *
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number.
 *
 * Заметки:
 * - Чётные числа могут делится на 2 без остатка.
 */

// Решение

function isEven(arg){
    if (typeof arg === 'number') {
        if (arg % 2 === 0) {
            console.log(arg, true);
            return true;
        } else {
            console.log(arg, false);
            return false;
        }
    } else {
        throw new Error('parameter type is not a Number');
    }
}

/* не удалять */
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number

exports.isEven = isEven;
/* не удалять */