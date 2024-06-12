var ver = window.document.getElementById('verificar')

ver.onclick = function () {

var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passos = window.document.getElementById('passos')
var res = window.document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
window.alert('[ERRO!] digite as informações novamente.')
res.innerHTML = ''
} else {

    res.innerHTML = 'Contando: ' 

  var ini = Number(inicio.value)
  var f = Number(fim.value)
  var pas = Number(passos.value)

  for(var c = ini; c <= f; c += pas) {
   res.innerHTML += `${c}, ` 
  }
}

}