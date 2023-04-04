const numeros = [1, 2, 5, 10]

for (num of numeros) {
    console.log(num * 2)
}

const numdobrado = numeros.map(num => {
    return ( num * 2 )
})

console.log(numdobrado)