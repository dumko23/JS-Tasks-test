/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 * 
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];


// Решение

function inspect(array){
    if(!(arguments.length === 1)){
        throw new Error('Function should take 1 argument');
    }else if(!Array.isArray(array)){
        throw new Error('Argument is not an Array');
    }
    let newArray = [];
    array = array.filter((value) => typeof value === 'string');
    if(array.length === 0){
        return newArray;
    }
    newArray = array.map((value) => value = value.length);
    return newArray;
}


const result = inspect(array);
const result1 = inspect([1,1,1,1,1,1,1,1,11]);

console.log(result); // [ 7, 11, 7, 12 ]
console.log(result1); // []
console.log(inspect())


exports.inspect = inspect;