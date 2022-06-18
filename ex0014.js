var agora = new Date()
var diaSem = agora.getDay()
diaSem = 7
/*
Domingo
Segunda
Terça
Quarta
Quinta
Sexta
*/

switch(diaSem) {
case 0 :
    console.log(`domingo`)
break

case 1 :
    console.log(`segunda`)
    break

case 2 : 
    console.log(`terça`)
    break

case 3 : 
    console.log(`Quarta`)
    break

case 4 : 
    console.log(`Quinta`)
    break

case 5 : 
    console.log(`Sexta`)
    break

case 6 : 
    console.log(`Sábado`)
    break
    
    default:
        console.log('[erro] Dia inválido!')
        break
}