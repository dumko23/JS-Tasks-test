const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.

let sortedArr = [];
let len = arr.length;
let prevElem;
let nextElem;
for (let i = len; i > 0 ; i--){
    (arr[i] < arr[i-1]) ? sortedArr[len - i] = arr[i] : sortedArr[len - i] = arr[i-1];
}
console.log(sortedArr);