var n1 = Number(window.prompt('Digite um número: ')) //antes string agora n
var n2 = Number(window.prompt('Digite outro número: ')) //antes string agora n
var s = n1 + n2
window.alert(`A soma entre os valores ${n1} e ${n2} é de: ` + s)
window.confirm ('Convertendo isso para o valor string isso vira: ' + n1 +  n2) //convertendo Number para String

/* o + serve para:
- adição (number + number)
- concatenação (string + string) */