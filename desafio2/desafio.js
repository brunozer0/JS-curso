function verificador (){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || Number (fAno.value) > ano){
        window.alert ('verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
             if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-menino.jpg')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg' )

            } else if (idade < 50) {
                //aulto
                img.setAttribute('src', 'homem-adulto.jpg')
            
            } else {
                //idoso
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-menina.jpg')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                //aulto
                img.setAttribute('src', 'mulher.adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}   