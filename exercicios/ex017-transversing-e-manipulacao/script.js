// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const  copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq
const primeiroDT = document.querySelector('dt');
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
const dtdd = document.querySelector('dd');
console.log(dtdd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

faq.innerHTML = animais.innerHTML;
