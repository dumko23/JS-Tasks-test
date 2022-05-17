/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */



// Решение
const person = { 
    get salary() {
        let date = new Date();
        if(31 - date.getDate() > 20){
            return console.log('good salary');
        } else{
            return console.log('bad salary');
        }
    }
};


person.salary; // good salary

exports.person = person;