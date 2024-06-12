var idade = 67
console.log(`você tem ${idade} anos:`)
if(idade < 16){
    console.log('Não vota no Brasik')
} else if (idade >= 16 && idade < 18 || idade > 65){
        console.log('Voto opcional no Brasil')
    } else{
        console.log('Voto obrigatório no Brasil')
    }