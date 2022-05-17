/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str){
    if (typeof str === 'string'){
        if (str.length === 0){
            return console.log('');
        } else {
            let arrOfChars = str.split('');
            arrOfChars[0] = arrOfChars[0].toUpperCase();
            return console.log(arrOfChars.join('')); 
        }
    } else {
        throw new Error('parameter type is not a String');
    }
    
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''
upperCaseFirst(0);

exports.upperCaseFirst = upperCaseFirst;