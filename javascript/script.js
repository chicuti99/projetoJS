function carregar(){
    var txt = window.document.getElementById('hora')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    hora = 23
    txt.innerHTML = `Agora são ${hora} horas.`

    if(hora < 12 && hora > 0) {
        imagem.src = 'frame-iphone.PNG'
        document.body.style.background = '#e2cd9f'
    }

    else if(hora > 12 && hora < 18) {
        imagem.src = 'icon-pc.PNG'
        document.body.style.background = '#b9846f'
    }

    else {
        imagem.src = 'logo-twitter.JPG'
        document.body.style.background = '#515154'
    }
}
