/*
 Создайте функцию getUniqueTags. Функция должна возвращать массив имен уникальных тегов на странице.
 За основу можно взять функцию uniqueArray, которую вы реализовали ранее.

 Пример:

 getUniqueTags(); //['html','head','body','div']
 function getUniqueTags() {

 }
 */

function uniqueArray(arr) {
    var newArr = [];

    arr.forEach(function (el) {
        if (newArr.indexOf(el) === -1) newArr.push(el);
    });
    return newArr;
};

// var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];
// console.log(uniqueArray(arr));


function getUniqueTags() {
    var elems = document.body.getElementsByTagName("*");
    var elemsArr = [];
    for (var i=0, max = elems.length; i<max; i++) {
        elemsArr.push(elems[i]);
        // console.log(elems[i]);
    }
    // console.log(elemsArr);
    // return elemsArr;

    var uniq = uniqueArray(elemsArr);
    return uniq;
};
getUniqueTags(); //['html','head','body','div']
console.log(getUniqueTags());
