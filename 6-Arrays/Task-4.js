/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

function some(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array');
    } else if (!typeof callback === 'function') {
        throw new Error('Second argument should be a Function');
    } else {
        let len = array.length;

        for (let i = 0; i < len; i++) {
            if (callback(array[i], i, array)) {
                return true;
            }
        }
    }
    return false;
}

const result = some(array, function (item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;