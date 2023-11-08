function contar(){
    var inicio = window.document.getElementById("txti")
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'impossivel contar'
    }else{
        res.innerHTML = "contando: " 
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if( p <= 0){
            window.alert('Passo invalido! Reconsiderando: PASSO 1')
            p = 1
        }
        if(i < f){
            // CONTAGEM CRESCENTE
            for( var c = i ; c <= f ; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            // CONTAGEM REGRESSIVA
            for(var c = i ; c >= f ; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }

        
}