var agora = new Date()
var hora = agora.getHours()

console.log(`agora são exatamente ${hora} horas.`)
if (hora > 3 && hora <= 12){
    console.log('bom dia!')
} else if (hora > 12 && hora <= 18){
  console.log('boa tarde!')
} else if (hora > 19 && hora <= 24){
    console.log('Boa noite!')
} else{
    console.log('boa madrugada!')
}