console.log('5.8')

let mapArr = new Map()

mapArr.set('qwe', 'it is a qwe')
mapArr.set(1, 'it is a 1')
mapArr.set(false, 'it is a false')

for(let key of mapArr.keys()) {
    console.log(`Ключ — ${key}, значение — ${mapArr.get(key)}`)
}