console.log('5.1')
let userNum = prompt('Введите число')
 
num = +userNum

if(typeof num === 'number' && num) {
    if(isNaN(num)) {
        console.log('Упс, кажется, вы ошиблись')
    } else if(num % 2 == 0) {
        console.log('Вы ввели четное число')
    } else {
        console.log('Вы ввели нечетное число')
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}