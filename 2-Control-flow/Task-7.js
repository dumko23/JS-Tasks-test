const array = [1, 2, 3, 4];

// Напишите код, который посчитает сумму всех парных элементов в массиве.
// Использовать встроенные методы массивов — нельзя.
let sumEven = 0;
let len = array.length;
for ( let i = 0; i < len; i++){
    if(array[i] % 2 === 0){
        sumEven += array[i];
    }
}

let sumEven1 = 0;
for (let num of array){
    if (num % 2 === 0) {
        sumEven1 += num;
    }
}

console.log(sumEven, sumEven1);