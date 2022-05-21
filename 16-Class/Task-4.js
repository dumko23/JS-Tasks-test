/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 *
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer {
    reverse(string){
        if (typeof string === 'string'){
            if (string.length === 0){
                return console.log('');
            } else {
                return string.split('')
                    .reverse()
                    .join('');
            }
        } else {
            throw new Error('parameter type is not a String');
        }
    }

    uppercaseFirst(string){
        if (typeof string === 'string'){
            if (string.length === 0){
                return console.log('');
            } else {
                let arrOfChars = string.split('');
                arrOfChars[0] = arrOfChars[0].toUpperCase();
                return arrOfChars.join('');
            }
        } else {
            throw new Error('parameter type is not a String');
        }
    }

    uppercaseAll(string){
        if (typeof string === 'string'){
            if (string.length === 0){
                return console.log('');
            } else {
                return string.toUpperCase();
            }
        } else {
            throw new Error('parameter type is not a String');
        }
    }
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;