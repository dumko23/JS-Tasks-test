/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone(start, end, delay) {
    if (postpone.arguments.length !== 3) {
        throw new Error('Function should take exactly 3 parameters');
    } else if (typeof start !== 'number') {
        throw new Error('First parameter should be a Number');
    } else if (typeof end !== 'number') {
        throw new Error('Second parameter should be a Number');
    } else if (typeof delay !== 'number') {
        throw new Error('Third parameter should be a Number');
    }
    let currentDelay = delay;
    if (start < end) {
        for (let i = start; i <= end; i++) {

            setTimeout(() =>
                console.log(i), currentDelay);

            currentDelay = currentDelay + delay;
        }
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            setTimeout(() =>
                console.log(i), currentDelay);
            currentDelay = currentDelay + delay;
        }
    }

}
// При вызове функции несколько раз происходит параллельное выполнение и значения выводятся с указанной задержкой
// но одновременно: ... 1 3 ... 2 2 ... 3 1
//postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;