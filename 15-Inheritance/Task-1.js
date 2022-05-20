/**
 * Задача 1.
 *
 * Добавьте всем функциям в прототип метод delay(ms).
 *
 * При вызове этого метода, функция, на которой этот метод вызывают,
 * должна быть вызвана отложено, через указанное количество миллисекунд.
 *
 * Если функция, на которой вызывается метод delay(ms) нуждается в аргументах,
 * то их нужно пробросить в аргументы функции, которую возвращает метод delay(ms).
 *
 * func.delay(1000)('value 1', 'value 2').
 *
 * В примере выше аргументы 'value 1' и 'value 2' станут первым и вторым
 * аргументами для функции func.
 *
 * Условия:
 * - количество миллисекунд указывается в первом аргументе метода delay(ms);
 * - возвращаемая методом delay функция должна быть необязательной;
 * - в реализации метода delay(ms) обязательно использовать setTimeout.
 */


function delay(ms) {



    let argList;
    let newArr = [];
    let callback = this.bind(this); //  = this; ???

    setTimeout(function () {
        callback(...newArr);
    }, ms);


    return function (...args) {
        argList = [...args];

        for (let arg of argList){
            newArr.push(arg);
        }
    }
}


function sayHello() {
    console.log('Hello!');
}

Object.getPrototypeOf(sayHello).delay = delay;
sayHello.delay(1000); /* Выведет "Hello!" через 1 секунду */


function sum(a, b) {
    console.log(a + b);
}

Object.getPrototypeOf(sum).delay = delay;
sum.delay(1000)(5, 2); /* Выведет 7 через 1 секунду. */
sum.delay(1000)(1, 2);
// console.log( Object.getPrototypeOf(sum), sum.toString(), sum(1,2))