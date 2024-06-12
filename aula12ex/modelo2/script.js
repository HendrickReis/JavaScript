var ver = window.document.getElementById('verificar')

ver.onclick = function () {
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique se seus dados foram postos corretamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(formAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'homem-bebe.jpg')
            } else if (idade >= 10 && idade < 21) {
                // adolescente
                img.setAttribute('src','homem-jovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('homem-velho.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
         if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src', 'mulher-bebe.jpg')
        } else if (idade >= 10 && idade < 21) {
            // adolescente
            img.setAttribute('src', 'mulher-jovem.jpg')
        } else if (idade >= 21 && idade < 50) {
            //adulta
            img.setAttribute('src', 'mulher-adulta.jpg')
        } else {
            //idosa
            img.setAttribute('src', 'mulher-velha.jpg')
        }
    }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um/a ${genero} com ${idade} anos. `
        res.appendChild(img)
        img.style.margin = '15px'
    }
}
