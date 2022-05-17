/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение

function f(a){
    let week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',];

    if(typeof a === 'number'){
        if (a >= 1 && a < 8) {
            return console.log(week[Math.floor(a)-1]);
        }else{
            throw new Error('parameter should be in the range of 1 to 7');
        }
    }else{
        throw new Error('all parameters should be a Number type');
    }
}

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

exports.f = f;
/* не удалять */