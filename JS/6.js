// 6) Написать функцию для выполнения параллельных вычислений без использования Promise.
//
//     var a = function(one, two) {
//     return one + two
// }
// var b = function() {
//     return false;
// }
// paralell([[a, [1, 2]], [b]], function(results) {
//     console.log(results); // [3, false]
// });


var a = function (one, two) {
    return one + two
}

var b = function () {
    return false;
}



const completeFunc = (array) => {
    const func = array[0];

    if (array.length === 1) {return func()}

    const one = array[1][0];
    const two = array[1][1];

    return func(one, two);
}


const parallel = (array, func) => {
    const results = [];

    array.forEach(el => results.push(completeFunc(el)));

    return results;
}


console.log(parallel(
    [[a, [1, 2]], [b],], function (results) {
        console.log(results)
    }
));
