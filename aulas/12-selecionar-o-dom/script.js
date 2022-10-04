// POR ID
const animais = document.getElementById('animais');
console.log(animais);


// POR CLASSE
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);


// SELECIONAR COMO ESTA NO CSS (querySelector)
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);


// SELECIONAR LINKS INTERNOS
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);


//SELECIONA TODOS OS ELEMENTOS COMPATIVEIS COM O SELETOR CSS EM UMA NODE LIST
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[2]); // Numero dentro da chave para selecionar um especifico, sem chave seleciona todos



// HTMLcolection e NODEselection
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');
//console.log(gridSectionHTML);
//console.log(gridSectionNode);


// ARRAY-LIKE
gridSectionNode.forEach(function(item, index){
    console.log(item);
});


const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item){
    console.log(item);
});