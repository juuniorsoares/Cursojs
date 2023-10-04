function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var mensagem = window.document.getElementById('paragrafo')
    var data = new Date()
    var minuto = data.getMinutes()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if(hora >= 0 && hora < 12){
        // BOM DIA 
        img.src = 'fotomanha.png'
        document.body.style.background = '#dfad21'
    }else if(hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#fe6302'
    }else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#062338'
    }
}