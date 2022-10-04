const href = window.location.href;

console.log(href);

if( href === 'http://127.0.0.1:5500/') {
    console.log('é igual')
}

const h1Selecionado = document.querySelector('h1');

h1Selecionado.addEventListener( 'click', function() {
    console.log('clicou em ', h1Selecionado.innerText);
})