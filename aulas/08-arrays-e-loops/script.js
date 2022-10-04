// ARRAY
/* 

var videoGames = ['Swich' , 'PS4', 'XBox'];

// Para acessar um elemento da array
videoGames[0] // Swich
videoGames[2] // XBox  
// numero da posição do item, iniciando com base 0

videoGames.push('3DS'); // adiciona item na array
videoGames.pop(); // Remove o ultimo item da array 

*/


 // LOOP

 /*

 for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
 }

 */


 /*
 
 var i = 0;
 while (i < 10) {
    console.log(i);
    i++;
 }

*/

// Array com Loop



var videoGames = ['Swich' , 'PS4', 'XBox', '3DS'];
for (var item = 0; item < videoGames.length; item ++) { // Com videoGames.lenght, usa o valor da array quando nao se sabe quantas lenght tem
    console.log(videoGames[item]); // Desta maneira no console.log, aparecera o nome do item 
    if(videoGames[item] === 'PS4') { // para quebrar o loop quando encontrar  PS4
        break;
    }
}





// ForEach

var frutas = ['banana', 'Pera', 'maçã', 'abacaxi']

frutas.forEach(function(fruta) {console.log(fruta)})