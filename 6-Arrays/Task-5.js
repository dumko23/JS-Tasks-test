/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

function reduce(array, callback, accumulator) {
    if (!(arguments.length === 3)) {
        throw new Error('Function should take 3 arguments');
    } else if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array');
    } else if (!(typeof callback === 'function')) {
        throw new Error('Second argument should be a Function');
    } else if (!(typeof accumulator === 'number')){
        throw new Error('Third argument should be type of Number');
    }
    let len = array.length;
    let reducedValue;

    for (let i = 0; i < len; i++) {
        if(i === 0){
            reducedValue = callback(accumulator, array[i], i, array);
        } else {
            reducedValue = callback(reducedValue, array[i], i, array)
        }
    }
    return reducedValue;
}

const result = reduce(
    array,
    function (accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;