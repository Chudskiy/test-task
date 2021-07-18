// 12) Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой
// как значения. Не подходящие ключи массивов должны быть исключены.
//
//     Синтаксис: array_combine(keys: array, values: array): Object
// Пример:
//     let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5,
// "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}


let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan",
    "ashan@example.com", true, false];

let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];


const isValueTypeExcluded = (value, excludedTypes = ['undefined', 'null', 'boolean', 'array', 'object']) => excludedTypes.includes(typeof value)

const array_combine = (arr1, arr2) => {
    const obj = {};

    for (let i = 0; i < arr1.length; i++) {
        if (isValueTypeExcluded(arr1[i])) {
            continue
        }
        obj[arr1[i]] = arr2[i];
    }

    return obj;
}

console.log('result = ', array_combine(testData, testData2));
