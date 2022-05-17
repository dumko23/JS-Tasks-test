const array = [1, 2, 3, 4];

// Написать код который посчитает сумму всех элементов в массиве.
// Использовать встроенные методы массивов — нельзя.
 let sum = 0;
 let len = array.length;
 for (let i = 0; i < len; i++){
     sum += array[i];
 }

 let sum1 = 0;
 for (let num of array){
     sum1 += num;
 }
 console.log(sum, sum1);