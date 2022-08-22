
var height = 6; 
var width = 5; //número de caracteres


var row = 0; //tentativa atual
var col = 0; // letra da tentativa atual

var gameOver = false;
var word = 'SQUID';

window.onload = function() {
    initialize();
}

function initialize () {
        //sei que no index ficaria mais legível, fiz por função pra treinar o js 
        // cria o "tabuleiro"
    for ( let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            //<span id = '0-0' class = 'tile'>P</span>
            let tile = document.createElement('span');
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add('tile');
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
        
    }
    //espera apertar a tecla
    document.addEventListener('keyup', (e) => {
        if (gameOver) return;

    //   letras individuais
        if ('KeyA' <= e.code && e.code <= 'KeyZ') {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e.code == 'Backspace') {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = '';   
        }

        else if (e.code == 'Enter') {
            update();  
            row += 1;
            col = 0;
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById('answer').innerText = word;

        }
    })
}

function update() {
    let correct = 0;
    for (let c =0; c < width; c++){
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //tá na posição correta?
        if (word[c]== letter) {
            currTile.classList.add("correct");
            correct +=1;
        }//tá na palavra?
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        }//Não tá na palavra:
        else {
            currTile.classList.add("absent");
        } 

        if (correct == width) {
            gameOver = true;

        }

    }
}
 
