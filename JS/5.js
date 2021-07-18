// 5) Выведите все элементы массива используя рекурсию.
//
//     var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
// fuction recuseLog(* Ваши атрибуты *) { }
// recuseLog(arr);


let arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recuseLog(array) {
    if (array.length > 0) {
        // console.log('elem => ', array.shift())
        recuseLog(array);
    }
}
recuseLog(arr);
