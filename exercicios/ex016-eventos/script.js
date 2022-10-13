// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

function callback(event) {
    event.preventDefault();
    linkInterno.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}

linkInterno.forEach((links) => {
    links.addEventListener('click', callback)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *');

function elementoClick(e) {
    console.log(e.currentTarget) // Remover o console.log() e acidionar o .remove() na frente do target
}

elementos.forEach((element) => {
   element.addEventListener('click', elementoClick)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function fontBig(event) {
    if(event.key === 't') {
        document.body.classList.toggle('font-big')
    }
}

window.addEventListener('keydown', fontBig);
