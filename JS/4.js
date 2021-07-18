// 4) Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.
//
//     var arr = [1, 2, 3];
// arr.append(0);
//[0, 1, 2, 3]


let arr = [1, 2, 3];

Array.prototype.insert = function ( index, elem ) {
    this.splice( index, 0, elem );
};

arr.insert(0, 0);

console.log('arr = ', arr);
