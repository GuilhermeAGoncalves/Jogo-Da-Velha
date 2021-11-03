//criando player
const player1 = 'x'
const player2 = 'o'

var playTime = player1 //começa jogando player 1
var gameOver = false //criando game over

atualizarMostrador();
inicializarEspacos();

function atualizarMostrador(){
    
    if(gameOver){return;}

    if(playTime == player1){
        let player = document.querySelectorAll("section.mostrador img")[0];
        player.setAttribute('src', 'img/x.png')
        player.setAttribute('alt', 'jogador 1')

    }
    else{
        let player = document.querySelectorAll('section.mostrador img')[0];
        player.setAttribute('src', 'img/o.png')
        player.setAttribute('alt', 'Jogador 2')

    }
}

function inicializarEspacos(){

    let espaco = document.getElementsByClassName('espaco');
    for (let index = 0; index < espaco.length; index++) {
        espaco[index].addEventListener('click', function(){

            if (gameOver) {return}

            if(this.getElementsByTagName('img').length == 0){

                if (playTime == player1){
                    this.innerHTML = "<img src='img/x.png'>";
                    this.setAttribute('jogada', player1)
                    playTime = player2
                }
                else{
                    this.innerHTML = "<img src='img/o.png'>"
                    this.setAttribute('jogada', player2)
                    playTime = player1

                }
                atualizarMostrador()
                verificarVencedor()
            }
        })
        
    }
}

function verificarVencedor(){

let a1 = document.getElementById('A1').getAttribute('jogada')
let a2 = document.getElementById('A2').getAttribute('jogada')
let a3 = document.getElementById('A3').getAttribute('jogada')

let b1 = document.getElementById('B1').getAttribute('jogada')
let b2 = document.getElementById('B2').getAttribute('jogada')
let b3 = document.getElementById('B3').getAttribute('jogada')

let c1 = document.getElementById('C1').getAttribute('jogada')
let c2 = document.getElementById('C2').getAttribute('jogada')
let c3 = document.getElementById('C3').getAttribute('jogada')

let vencedor = '';

if(((a1 === b1 && a1 === c1) || (a1 === a2 && a1 === a3) || (a1 === b2 && a1 === c3)) && a1 != '')
{
    vencedor = a1;
}
else if(((b2 === b1 && b2 === b3)||(b2 === a2 && b2 === c2)||(b2 === a3 && b2 === c1 )) && b2 != ''){
    vencedor = b2;
}
else if(((c3 === c2 && c3 === c1 )||( c3 === a3 && c3 === b3)) && c3 != '')
{
    vencedor = c3
}
else if(a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != '' && vencedor != a1 && vencedor != b2 && vencedor != c3){
    gameOver = true
    alert('Deu velha')
}

if (vencedor != ''){
    gameOver = true
    alert('O ganhador foi jogador: " ' + vencedor + ' "')
}

}