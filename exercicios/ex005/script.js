// Crie uma função para verificar se um valor é Truthy
function truthy(valor){
    if(!!valor) {
        return true
    } else {
        return false
    }
}
console.log(truthy('Gabriel'));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado + lado + lado + lado
}
console.log(perimetroQuadrado(5));




// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function dados() {
    var nome = 'Gabriel';
    var sobrenome = 'Santana';
    return `${nome} ${sobrenome}`;
}
console.log(dados());




// Crie uma função que verifica se um número é par
function numeroPar(numero) {
    var modulo = numero % 2;
    if(modulo === 0) {
        return 'par'
    } else { 
        return 'impar'
    }
}
console.log(numeroPar(10));



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeOf(valor) {
    console.log(typeof valor);
}
typeOf('Gabriel');




// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() { console.log('Gabriel Santana')});





// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);

  console.log(jaVisitei(20));
  