const array = [2, -1, -3, 15, 0, 4];

// Найдите сумму положительных элементов массива.
// Использовать встроенные методы массивов — нельзя.
let len = array.length;
let sum = 0;
for(let i = 0; i < len; i++){
    if(array[i]>0){
        sum +=array[i];
    }
}

console.log(sum);