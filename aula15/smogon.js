let num = [3,4,5]

num.push(7)
var s = 8
num.push(s)
num[3] = 6

console.log(`${num}`)
console.log(`${num.length}`)
console.log(`${num.sort()}`)

for (let c = 0; c < num.length; c ++) {
    console.log(`${num[c]}`)
    if (c == 5) {  // <----- dá certo
        break
    }
}

for (let c in num) { // <---- forma inovadora
    console.log(num[c])
}

console.log('smogon')

let pos = num.indexOf(s)
console.log(pos)