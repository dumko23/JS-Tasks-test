/**
 * Задача 3.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Для свойства rate и days добавьте методы для установки значений.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */

// Решение

class Worker {
    #firstName;
    #lastName;
    #rate;
    #days;
    constructor(firstName, lastName, rate, days) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#rate = rate;
        this.#days = days;
    }

    getSalary() {
        return this.#rate * this.#days;
    }

    getName(){
        return `${this.#firstName} ${this.#lastName}`;
    }

    getRate(){
        return this.#rate;
    }

    getDays(){
        return this.#days;
    }

    setRate(value){
        if(typeof value === 'number' && value > 0){
            this.#rate = value;
        } else {
            throw new Error('Parameter should be a Number and more than 0')
        }
    }

    setDays(value){
        if(typeof value === 'number' && value > 0){
            this.#days = value;
        } else {
            throw new Error('Parameter should be a Number and more than 0')
        }
    }
}

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.getName()); // Walter White
console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
console.log(worker.getSalary()); // 10 * 31 = 310

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary()); // 20 * 10 = 200

exports.Worker = Worker;