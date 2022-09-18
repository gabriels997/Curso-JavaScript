// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
35

// Crie duas expressões que retornem NaN
var quantidade = '10bananas';
var comeu = 5;
var restante = quantidade - comeu;
console.log(restante);

var andei = '2km';
var destino = '8km';
var restam = andei - destino;
console.log(restam);


// Somar a string '200' com o número 50 e retornar 250
var valor1 = +'200';
var valor2 = 50;
var total = valor1 + valor2;
console.log(total);

// Incremente o número 5 e retorne o seu valor incrementado
var numero1 = 5;
console.log(++numero1)

// Como dividir o peso por 2?
var numero2 = '80';
var unidade = 'kg';
var peso = numero2 + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var numero2 = +'80' / 2;
var unidade1 = 'kg';
var peso1 = numero2 + unidade1;

console.log(peso1)