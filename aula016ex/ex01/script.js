let verificar = window.document.getElementById('verificar')

verificar.onclick = function () {
    let lista = []
    let num = window.document.getElementById('num')
    let fim = window.document.getElementById('clique')
    let arm = window.document.getElementById('list')
    let res = window.document.getElementById('res')

    if (num.value.length == 0) {
        window.alert("[ERRO] Valor inválido ou já encontrado na lista")
    } else {
        res.innerHTML = ''

        let n = Number(num.value)
        lista.push(n)
        let item = document.createElement('option')
        item.text = `${n} foi adicionado a lista`
        item.value = `${n}`
        arm.appendChild(item)
        
        res.innerHTML = `${lista}`


    }
}