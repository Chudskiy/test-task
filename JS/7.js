// 7) Сделать функцию поиска значений в массиве.
//
//     Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример:
//     let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]


let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com",
    "Rafshan", "ashan@example.com", true, false];


const array_find = (array, str) => {
    let matchedValue;

    if(str instanceof RegExp) {
        matchedValue = array.filter(value => str.test(value));
    } else {
        matchedValue = array.filter(el => el === str);
    }

    return matchedValue;
}

console.log('result = ', array_find(testData, /^raf.*/i));
console.log('result = ', array_find(testData, "Rafshan"));
