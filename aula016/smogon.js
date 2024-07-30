x = 'par'
y = 'impar'

function parimp(n) {
    if (n%2 == 0) {
        return x
    } else { 
        return y
    }
}

let res = parimp(3)
console.log(res)