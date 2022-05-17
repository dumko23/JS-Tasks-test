const array = [1, 2, 3, 4, 5, 6];

// Напишите код, который посчитает сумму всех парных элементов в массиве.В суммировании участвуют только элементы больше 3.
// Использовать встроенные методы массивов — нельзя.

let sumEven = 0;
let len = array.length;
for (let i = 0; i < len; i++) {
    if (array[i] % 2 === 0 && array[i] > 3) {
        sumEven += array[i];
    }
}

let sumEven1 = 0;
for (let num of array) {
    if (num % 2 === 0 && num > 3) {
        sumEven1 += num;
    }
}
console.log(sumEven, sumEven1);