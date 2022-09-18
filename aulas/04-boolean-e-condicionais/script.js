var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('É verdadeiro');
} else if(possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não Possui nada.')
}


var nome = 'Gabriel';

if(nome) {
    console.log(nome)
} else {
    console.log('Nome não existe')
}

/* 
 FALSY
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

Todo o resto é truthy

*/

/*
 TRUTHY 
if(true)
if(1)
if(' ')
if('Gabriel')
if(-5)
if({})

*/

var corFavorita = 'azul';

switch(corFavorita) {
    case 'azul':
        console.log('Olhe para o cel')
        break;
    case 'amarelo':
        console.log('Olhe para o sol')
        break;
    case 'verde':
        console.log('Olhar para a floresta')
        break;
    default:
        console.log('Feche os olhos')
} 