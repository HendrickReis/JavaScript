let verificar = window.document.getElementById('verificar')
let num = window.document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let res = window.document.querySelector('div#res')

let valores = []

verificar.onclick = function () {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       window.alert('tudo ok')
       lista.appendChild(num.value)
    } else {
        window.alert('[ERRO] Valor inválido ou já encontrado na lista.')
    }
}

function isNumero(n) {
     if (Number(n) >= 1 && Number(n) <= 100) {
        return true
     } else {
        return false
     }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}