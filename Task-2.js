/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * 
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function collect(array){
    if (!(arguments.length === 1)) {
        throw new Error('Function should take 1 argument');
    } else if (!Array.isArray(array)) {
        throw new Error('Argument is not an Array');
    }
    let newArray = array;
    let sum = 0;
    let flat = true;

    while(flat === true){
        flat = false;
        for (let i = 0; i < newArray.length; i++){
            if (Array.isArray(newArray[i])){
                newArray = newArray.flat();
                flat = true;
                break;
            }
        }
    }

    if (newArray.length === 0){
        return 0;
    } else if (newArray.some(value => typeof value !== 'number')){
        throw new Error('All elements of an array should be type of Number, Array or be an empty array')
    }

    sum = newArray.reduce((a,b)=> a + b);

    return sum;
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
