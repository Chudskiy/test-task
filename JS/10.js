// 10) Сделать функцию которая возвращает уникальные элементы массива.
//
//     Синтаксис: array_unique(arr: array): any[]
// Пример:
//     let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]


let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan",
    "ashan@example.com", true, false];

let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

const array_unique = (array) => {
    return Array.from(new Set(array));
}
const result = array_unique(testData.concat(testData2));

console.log('result => ', result);
