// nomeie 3 propriedades ou métodos de strings
var nome = 'Gabriel';
//concat
//length
//endsWith


// nomeie 5 propriedades ou métodos de elementos do DOM
var dados = document.querySelector('.btn');

//btn.ariaBusy
//btn.attributes
//btn.nodeValue


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var copyText = document.getElementById("myInput");
copyText.select();
navigator.clipboard.writeText(copyText.value);
alert("Copied the text: " + copyText.value);


