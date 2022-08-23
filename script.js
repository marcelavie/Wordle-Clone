
var height = 6; 
var width = 5; //número de caracteres


var row = 0; //tentativa atual
var col = 0; // letra da tentativa atual

var gameOver = false;

var wordList = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry"]

var guessList = ["aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed"]

guessList = guessList.concat(wordList);

var word = wordList[Math.floor(Math.random()*wordList.length)].toLocaleUpperCase();
console.log(word);




window.onload = function() {
    initialize();
}

function initialize () {
        //sei que no index.html ficaria mais legível, fiz por função pra treinar o js 
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

    //Cria o teclado
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]
    for (let i=0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j =0; j < currRow.length; j++) {
            let keytile = document.createElement("div");

            let key = currRow[j];
            keytile.innerText = key;
            if (key == 'Enter') {
               keytile.id = "Enter"; 
            }
        
            else if (key == "⌫") {
                keytile.id = "Backspace"
            }
            else if ("A" <= key && key <= "Z") {
                keytile.id = "key" + key;
            }
            keytile.addEventListener("click", processKey);

            if (key == "Enter") {
                keytile.classList.add("enter-key-tile");

            }else{
                keytile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keytile);

        }
        document.body.appendChild(keyboardRow);
    }
    //espera apertar a tecla
    document.addEventListener('keyup', (e) => {
        processInput(e);
    })
}

function processKey() {
    let e = {"code" : this.id};
    processInput(e);

}

function processInput(e) {
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

    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById('answer').innerText = word;

    }
}

function update() {
    let guess ="";
    document.getElementById("answer").innerText = "";

    //string up the guess word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase();
    if (!guessList.includes(guess)) {
        document.getElementById("answer").innerText = "Not in word list";
        return;
    }

    //começa o jogo
    let correct = 0;
    let letterCount = {};

    for(let i=0; i < word.length; i++){
        letter = word[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        }
        else {
            letterCount[letter] = 1;
        }
    }

    //primeira iteração, checando as corretas
    for (let c =0; c < width; c++){
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //tá na posição correta?
        if (word[c]== letter) {
            currTile.classList.add("correct");

            let keytile = document.getElementById("Key" + letter);
            keytile.classList.remove("present");
            keytile.classList.add("correct");

            correct +=1;
            letterCount[letter] -= 1;
        }
        if (correct == width) {
            gameOver = true;

        }

    }
    //segunda iteração, checando as presentes na posição errada
    for (let c =0; c < width; c++){
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if(!currTile.classList.contains("correct")){
            //tá na palavra?
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                let keytile = document.getElementById("Key" + letter);
                if (!keytile.classList.contains("correct")) {
                    keytile.classList.add("present");

                }
         
                letterCount[letter] -= 1;
            }//Não tá na palavra:
            else {
                currTile.classList.add("absent");
            }
        } 
    }

    row += 1;
    col = 0;
}
 
