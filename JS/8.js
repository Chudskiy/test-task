// 8) Сделать функцию которая обрезает массив до указанного значения.
//
//     Синтаксис: array_skip_until(arr: array, value: any): any[]
// Пример:
//     let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd") // []


let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com",
    "Rafshan", "ashan@example.com", true, false];

const array_skip_until = (arr, elem) => {
    const index = arr.findIndex((el) => el === elem);
    return arr.slice(index);
}

console.log('array_skip_until => ', array_skip_until(testData, "colya@example.com"));
