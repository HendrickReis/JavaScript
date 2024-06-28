var ger = window.document.getElementById('gerar')

ger.onclick = function () {

    let cont = 0

    let teste = document.getElementById('teste')
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('sel')

    if (num.value.length == 0) {
      window.alert('[ERRO] Valor incorreto! tente novamente!')
    } else {
        let n = Number(num.value)

        tab.innerHTML = ''
 
        for (var c = 1; c <= 10; c++) {

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`

        }

       /*while (contar <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${contar} = ${n*contar}`
        tab.appendChild(item)
        contar++
       }*/


    }
}