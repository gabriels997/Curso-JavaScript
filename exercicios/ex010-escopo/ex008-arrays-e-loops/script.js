// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaVencida = [1959, 1962, 1970, 1994, 2002];
for( v = 0;  v < copaVencida.length; v++) {
    console.log('O Brasil ganhour a copa de ' + copaVencida[v])
}


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if(frutas[fruta] === 'Pera') {
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[4]