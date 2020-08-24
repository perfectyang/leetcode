// function changeWay(str) {
//   const temp = str.split('')
//   let i = 0
//   let j = temp.length - 1
//   while(i < j) {
//     let tem = temp[i]
//     temp[i] = temp[j]
//     temp[j] = tem
//     i++
//     j--
//   }
//   return temp.join('')
// }
// // console.log(changeWay('student'))

// function reverseStr(val) {
//   const arr = val.split(/\s/)
//   const newArr = []
//   for(let i = 0; i < arr.length; i++) {
//       newArr.unshift(changeWay(arr[i]))
//   }
//   return newArr.join(' ')
// }
// console.log(reverseStr('m jbrwbmamzlz bkjokxancguvcoc'))

// var readline=require("readline");
// var r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// r1.on("line",function(line){
//     line=line.trim();
//     var newStr ="";
//     for(var i=line.length-1;i>=0;i--){
//         newStr+=line[i];
//     }
//     console.log(newStr);
// });
// d = a2 - a1
// an = 2Sn/n -a1
// d = 5 - 2 = 3
// a1 = 2
// a2 = a1 + (n-1)*d = 5
// Sn = (an + a1)*n/2

// var readline = require('readline')
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.on('line', (line) => {
// })

// function createObj(prototype) {
//     function F(){}
//     F.prototype = prototype
//     return new F()
// }

// function prototype(child, parent) {
//     const protype = createObj(parent.prototype)
//     prototype.constructor = child
//     child.prototype = prototype
// }


var map = new Map()
map.set(1, 'a')
map.set(2, 'b')
map.set(3, 'c')
map.set(4, 'd')

function print () {
    for (let key of map.values()) {
        console.log(key)
    }
}

map.delete(3)
print()
console.log('--------')
map.set(3, 'c')
print()