var ver = window.document.getElementById('verificar')

ver.onclick = function () {

var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passos = window.document.getElementById('passos')
var res = window.document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
window.alert('[ERRO] as informações estão erradas ou incompletas! digite novamente.')
res.style.padding = '17px'
res.innerHTML = '<strong>Digite novamente.</strong>'
} else {

    res.innerHTML = 'Contando: <br>' 

  var ini = Number(inicio.value)
  var f = Number(fim.value)
  var pas = Number(passos.value)
  if (pas <= 0){
    window.alert('PASSO INVALIDO! considerando passo 1')
    pas = 1
  }
  // contagem crescente
  if (ini <= f){
  for(var c = ini; c <= f; c += pas) {
   res.innerHTML += ` ${c} \u{1F449} ` 
   ini += pas
  }

  // contagem decrescente/regressiva
  } else {
    for(c = ini; c >= f; c -= pas) {
      res.innerHTML += ` ${c} \u{1F449}`
    }
  }
res.innerHTML += `\u{1F3C1}`
}

}