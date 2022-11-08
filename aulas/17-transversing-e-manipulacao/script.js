/*
const h1 = document.querySelector('h1');
const animaisDescricao = document.querySelector('.animais-descricao');


h1.innerHTML = '<p>Novo Titulo</p>'  // Alterei o titulo HTML

//console.log(animaisDescricao.innerText);




// TRANSVERSING

const lista = document.querySelector('.animais-lista');

console.log(lista.previousElementSibling); // elemento anterior
            // nextElementSibling - Proximo elemento

console.log(lista.children[--lista.children.length]); //1
console.log(lista.querySelector('li:last-child')); //2
// Para puxar o ultimo item da lista - 1 / 2



//Manipulando elementos

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

// animais.appendChild(titulo); 
// Coloca o elemento(.titulo) dentro do ultimo filho de animais

// contato. insertBefore(animais, titulo); 
// Para colocar a classe animais , antes do titulo



//Novos elemento / Adicionando nova TAG e ELEMENTO nela
const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Titulo';
novoh1.classList.add('titulo');
mapa.appendChild(novoh1); 
// Adicionado Apos o mapa

console.log(novoh1);
*/


// Clonando 

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);
// adicionar o mesmo H1 em baixo sem remover o de cima / Clonando
