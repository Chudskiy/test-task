// 1) Напишите функцию cloneDeep таким образом, чтобы она была способна
// клонировать переданный как параметр объект.


let testData3 = {
        "name": "Vasya",
        "email": "vasya@example.com",
        "age": 20,
        "skills": {"php": 0, "js": -1, "madness": 10, "rage": 10}
    }


const cloneDeep = (obj) => {
    const clone = {};
    for (let i in obj) {
        if (typeof (obj[i]) == "object" && obj[i] != null) {
            clone[i] = cloneDeep(obj[i]);
        } else {
            clone[i] = obj[i];
        }
    }

    return clone;
}

console.log('testData = ', testData3[0]);

const result = cloneDeep(testData3[0])


testData3[0].skills.age = 25

console.log('testData = ', testData3[0]);
console.log('clone = ', result);
