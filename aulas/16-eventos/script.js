// MELHOR MANEIRA DE FAZER UM EVENT
/*
const img = document.querySelector('img');


function callback() {
    console.log('clicou')
}

img.addEventListener('click', callback)
*/




// Propriedades do event
/*
const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget)
    console.log(event.target)

}

animaisLista.addEventListener('click', callbackLista);
*/



//event.preventDefaul(), Prevenir o evento padrao
const linkExterno =  document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);



// Diferentes Eventos 
/*
const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);


window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
*/

function handleKeyboard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul')
    }
}

window.addEventListener('keydown', handleKeyboard);




//forEach e Eventos
const imgs = document.querySelectorAll('img')

function handleImg(event) {
    console.log(event.target);
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
});