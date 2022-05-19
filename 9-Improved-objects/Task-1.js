/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

function shallowMerge(firstObj, secondObj){
    let descriptor1 = Object.getOwnPropertyDescriptors(firstObj);
    let descriptor2 = Object.getOwnPropertyDescriptors(secondObj);

    return Object.defineProperties({}, Object.assign(descriptor1, descriptor2));
}

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false, enumerable: false });
Object.defineProperty(userData, 'job', { configurable: false, enumerable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;

console.log(Object.getOwnPropertyDescriptors(result)); //{
// firstName: {
//     value: 'Marcus',
//         writable: false,
//             enumerable: false,
//                 configurable: true
// },
// lastName: {
//     value: 'Schmidt',
//         writable: true,
//             enumerable: true,
//                 configurable: true
// },
// job: {
//     value: 'developer',
//         writable: true,
//             enumerable: false,
//                 configurable: false
// },
// country: {
//     value: 'Germany',
//         writable: true,
//             enumerable: true,
//                 configurable: true
// }
// }
