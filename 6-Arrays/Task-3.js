/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

function every(array, callback) {
    if (!(arguments.length === 2)) {
        throw new Error('Function should take 2 arguments');
    } else if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array');
    } else if (!typeof callback === 'function') {
        throw new Error('Second argument should be a Function');
    }
    let len = array.length;

    for (let i = 0; i < len; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

const result = every(array, function (item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

exports.every = every;

