ver = window.document.getElementById('verificar')

ver.onclick = function () {

    data = new Date();
    ano = data.getFullYear();
    formAno = window.document.getElementById('formAno')
    res = window.document.getElementById('res')


    if (formAno.value.length == 0 || formAno.value > ano) {
        res.innerHTML = '[ERRO!] cheque as informações e tente novamente.'
    } else {
      idade = ano - Number(formAno.value)
      genero = ''

     var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      sex = window.document.getElementsByName('sex')

      if (sex[0].checked) {
        genero = 'Masculino'
        if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'homem-bebe.jpg')
    } else if (idade < 21) {
        img.setAttribute('src', 'homem-jovem.jpg')
    } else if (idade < 50) {
        img.setAttribute('src', 'homem-adulto.jpg')
    } else if (idade > 120) {
        res.innerHTML = 'MENTIROSO'
    } else {
        img.setAttribute('src', 'homem-velho.jpg')
    }
        
      } else if (sex[1].checked) {
        genero = 'Feminino'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'mulher-bebe.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'mulher-jovem.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'mulher-adulta.jpg')
        } else if (idade > 120) {
            res.innerHTML = 'MENTIROSA'
        } else {
            img.setAttribute('src', 'mulher-velha.jpg')
        }
      } 
      res.style.textAlign = 'center'
      res.style.margin = '15px'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
      img.style.margin = '15px'

    }
}