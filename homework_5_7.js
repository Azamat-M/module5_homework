console.log('5.7')
let arr3 = [1,5,5,8,9,41,2,5, null, 'asd']

let odd, even, zeroInd

zeroInd = arr3[0]

let newArr3 = (zeroInd) ? arr3.slice(1) : arr3

let newArr3Len = newArr3.length

if(newArr3Len % 2 === 0) {
    odd = even = newArr3Len /2
} else {
    even = Math.floor(newArr3Len/2)
    odd = even+1
}

console.log(`Нулевой элемент - ${zeroInd}`)
console.log(`Кол-во четных - ${even}`)
console.log(`Кол-во нечетных - ${odd}`)