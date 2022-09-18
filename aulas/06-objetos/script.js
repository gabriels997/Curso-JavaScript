var pessoa = {
    nome: 'Gabriel',
    idade: 25,
}
console.log(pessoa.idade);



var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}
console.log(quadrado.area(5));




var menus = {
    width: 800,
    height: 50,
    backgroudColor: '#84e'
}

menu.backgroudColor = '#000'

menu.color = 'blue';

var bg = menu.backgroudColor;