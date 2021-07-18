// 2) Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
//     var arrays = [[1, 2, 3], [4, 5], [6]];
// Ваш код
// → [1, 2, 3, 4, 5, 6]


const arrays = [[1, 2, 3], [4, 5], [6]];

const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

const resultArray = arrays.reduce(reducer);

console.log('resultArray = ', resultArray);
