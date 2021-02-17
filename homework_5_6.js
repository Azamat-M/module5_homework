console.log('5.6')
let arr2 = [4,5,7,5,9,7,4,1]
let isSame

tempItem = arr2[0]
 
arr2.forEach(function(item,index,array) {
    isSame = (tempItem !== item) ? false : true
})



console.log(`Все элементы в массиве ${arr2} ${isSame ? 'одинаковые' : 'неодинаковые'}`)