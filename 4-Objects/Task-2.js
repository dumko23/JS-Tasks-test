/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * Свойство `salary` можно читать, но нельзя менять.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 * Если rate не установлен — возвращаем число 0.
 */

const person = {
    get salary(){
        let date = new Date();
        if(!this.rate){
            return console.log(0);
        } else {
            return console.log(this.rate * date.getDate());
        }
    }
};

// Решение
let descriptors = Object.getOwnPropertyDescriptors(person);

descriptors.salary.writable = false;

Object.defineProperties(person,{
    rate: { writable: true, enumerable: false, configurable: false },
})

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;