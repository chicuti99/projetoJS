function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = window.document.getElementById('txtano')
    var res = window.document.getElementById('imagem')

    if(nascimento.value.length == 0 ){
        window.alert('corrija os dados')
    }

    else{
        var fsex = window.document.getElementsByName('rdsex')
        var idade = ano - Number(nascimento.value)
        //res.innerHTML = `vc tem ${idade} anos `
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ''
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade < 10 && idade >= 0){
                img.setAttribute('src','imagens/menino.jpeg')
            }

            else if(idade < 21) {
                img.setAttribute('src','imagens/jovem.jpeg')
            }

            else if(idade < 50){
                img.setAttribute('src','imagens/adulto.jpeg')
            }

            else {
                img.setAttribute('src','imagens/idoso.jpg')
            }
        }

        else {
            genero = 'mulher'
            if(idade < 10 && idade >= 0){
                img.setAttribute('src','imagens/menina.jpeg')
            }

            else if(idade < 21) {
                img.setAttribute('src','imagens/adolescente.jpeg')
            }

            else if(idade < 50){
                img.setAttribute('src','imagens/adulta.jpeg')
            }

            else {
                img.setAttribute('src','imagens/idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o sexo ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}