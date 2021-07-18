// 9) Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.
//
//     Доступные шаблоны:
//     'string' => строки,
//     'number' => числа,
//     'int' => целые числа,
//     'float' => числа с плавающей точкой,
//     'bool' => true | false,
//     'function' => функция,
//     'array' => массив,
//     Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример:
//     let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, {age: 'float'}) // []
// let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]


let testData4 = [
    {"name": "Vasya", "email": "vasya@example.com", "age": 20},
    {"name": "Dima", "email": "dima@example.com", "age": 34},
    {"name": "Colya", "email": "colya@example.com", "age": 46},
    {"name": "Misha", "email": "misha@example.com", "age": 16},
    {"name": "Ashan", "email": "ashan@example.com", "age": 99},
    {"name": "Rafshan", "email": "rafshan@example.com", "age": 11},
    1, 2, 1990, 85, 24,
    "Vasya",
    "colya@example.com",
    "Rafshan",
    "ashan@example.com",
    true, false,
    [[[[
        1, 2, 1990, 85, 24,
        "Vasya",
        "colya@example.com",
        "Rafshan", "ashan@example.com",
        true, false,
        [
            {
                "name": "Rafshan",
                "email": "rafshan@example.com",
                "age": 11
            }
        ]
    ]]]]
]

const checkObject = (obj, type, arr = []) => {
    for (let key in type) {
        const matchObj = {};

        if (type[key] === typeof obj[key]) {
            matchObj[key] = obj[key];

            arr.push(matchObj)
        }
    }

    return arr;
}


const isValueTypeExcluded = (value, excludedTypes = ['undefined', 'null', 'boolean', 'array', 'object']) => excludedTypes.includes(typeof value)


const array_normalize = (arr, type, transform = false) => {
    let resArr = [];


    arr.forEach(el => {
        if (typeof el === 'number' && transform) {
            el = String(el);
        }

        if (transform) {
            if (typeof el === typeof type && !Array.isArray(el)) {
                checkObject(el, type, resArr);
            }
        }

        if (typeof el === type && !isValueTypeExcluded(el)) {
            resArr.push(el)
        }
    })

    console.log('resArr = ', resArr);
    return resArr;
}

array_normalize(testData4, 'string');
// array_normalize(testData4, {age: 'number'});

