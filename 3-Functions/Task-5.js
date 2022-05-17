/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

const array = [1, 2, -4, 3, -9, -1, 7];

// Решение

function arrayOfPositives(array){
    let newArray = []
    if( Array.isArray(array)){
        for(let value of array){
            if(isPositive(value)){
                console.log
                newArray.push(value)
            }
        }
    } else {
        throw new Error('all parameters should be an Array type');
    }
    return console.log(newArray);
}

function isPositive(arg){
    if(typeof arg === 'number'){
        if(arg > 0){
            console.log(arg, true);
            return true;
        } else{
            console.log(arg, false);
            return false;
        }
    } else {
        throw new Error('parameter type is not a Number');
    }
}
arrayOfPositives(array);

/* не удалять */
isPositive(-3); // false
isPositive(3); // true
isPositive('s'); // Error: parameter type is not a Number

exports.isPositive = isPositive;
/* не удалять */