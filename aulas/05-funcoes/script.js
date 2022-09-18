function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));



function pi() {
    return 3.14;
}
var total = 5 * pi();

console.log(pi());




function imc(peso, altura) {
    var imc = peso / (altura* altura);
    return imc;
}

console.log(imc(80, 1.8));




function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do céu'
    } else if(cor === 'verde') {
        return 'Eu gosto de mato'
    } else {
        return 'Eu nao gosto de cores';
    }
}
console.log(corFavorita());




addEventListener('click', function(){ console.log('oi') });




function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20, 1.8);
console.log(imc2(80, 1.8));





function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
    console.log(idade)
}

console.log(terceiraIdade('oi'))




function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} paises`
}





var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());





