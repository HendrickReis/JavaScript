function fat(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
          fat *= c
    }
    return fat
}

console.log(fat(5))

/* function fat(n) {
    let fat = n
    let calc = n
    for (c = 1; c < fat; c++) {
        calc *= c
    }
    return calc
}

console.log(fat(3)) */