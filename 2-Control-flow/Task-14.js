// Дано число`n=1000`.Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится ? Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную`num`.
// Использовать встроенные методы массивов — нельзя.

let n = 1000;
let minValue = 50;
let num = 0;
for (let i = 0; n > minValue; i++){
    n = n / 2; 
    num++
}
console.log(n, num); //31.25