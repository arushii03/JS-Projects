let arr = [2, 6, 4, 8, 10, 1];

const forEachReturn = arr.forEach(function(el, i, arr){
    console.log((i+1) + " " + el);
})
console.log(forEachReturn);
//undefined because forEach() method doesn't return anything

const mapArr = arr.map(function (value, index, array){
    return value * 2;
})

console.log(mapArr);

const filterArr = arr.filter(function (value, index, array) {
    return value > 5;
})

console.log(filterArr);

const reduceArr = arr.reduce(function(acc, value, index, arr){
    return acc+= value;
}, 0)

console.log(reduceArr)

// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
// }

const findArr = arr.find(function(value, index, arr) {
    return value >= 7;
})
console.log(findArr)

const findIndexArr = arr.findIndex(function(value, index, arr){
    return value >= 7;
})
console.log(findIndexArr)
// works same as find(), but returns the element index instead of the element itself

const someArr = arr.some(function(el, i, arr) {
    return el > 5;
})
console.log(someArr)

const everyArr = arr.every(function(el, i, arr) {
    return el > 5;
})
console.log(everyArr)

const nestedArr = [1, 2, 3 ,[4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
console.log(nestedArr.flat(2))