const arr = [6, 5, 4,3, 3, 2, 1];
// [1,2,3,4,5,6]

// Отсортируйте массив по возрастанию.
// Использовать встроенные методы массивов — нельзя.
let sortedArr = arr;
let len = arr.length;
let temp = sortedArr[0];
let swapped = true;
while (swapped === true) {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
            temp = sortedArr[i];
            sortedArr[i] = sortedArr[i + 1];
            sortedArr[i + 1] = temp;
            swapped = true;
        }
    }
}
console.log(sortedArr);