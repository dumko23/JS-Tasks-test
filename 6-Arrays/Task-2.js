/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter(array, callback){
    

    if (!(arguments.length === 2)) {
        throw new Error('Function should take 2 arguments');
    } else if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array');
    } else if (!typeof callback === 'function') {
        throw new Error('Second argument should be a Function');
    }
    let len = array.length;
    let newArray = [];
    for (let i = 0; i < len; i++) {
        if (callback(array[i], i, array)){
             newArray.push(array[i]);
        }
    }
    
    return newArray;
}

const filteredArray = filter(array, function (item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;