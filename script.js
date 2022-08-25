var numeroTentativas = 6; 
var tamanhoDaPalavra = 5; 

var fileira = 0; //tentativa atual
var coluna = 0; //letra atual

var fimDeJogo = false;

var listaDePalavras =
["sagaz", "amora", "pinto", "amago", "negro", "exito", "mexer", "termo", "nobre", "senso",
        "arder", "bolha", "rolha", "circo", "falir", "pedir", "afeto", "plena", "etica", "mutua",
        "tenue", "sutil", "vigor", "aquem", "fazer", "porem", "audaz", "assim", "sanar", "seçao",
        "inato", "cerne", "fosse", "ideia", "poder", "moral", "desde", "torpe", "muito", "justo",
        "honra", "futil", "sobre", "anexo", "quiça", "razao", "etnia", "icone", "sonho", "tange",
        "egide", "lapso", "amigo", "mutuo", "expor", "haver", "habil", "tempo", "seara", "dengo",
        "entao", "pesar", "avido", "posse", "genro", "boçal", "coser", "ardil", "causa", "corja",
        "dizer", "paria", "prole", "detem", "tenaz", "dever", "graça", "saber", "obice", "crivo",
        "digno", "apice", "animo", "ansia", "ceder", "brado", "comum", "sendo", "temor", "gleba",
        "culto", "assaz", "atroz", "mundo", "pauta", "censo", "fugaz", "ainda", "cozer", "valha",
        "denso", "nenem", "vicio", "estar", "forte", "vulgo", "reves", "pudor", "regra", "dogma",
        "louco", "criar", "banal", "round", "impor", "saude", "jeito", "atras", "ordem", "tenro",
        "pifio", "desse", "apraz", "pedir", "merce", "reaça", "clava", "usura", "prosa", "feliz",
        "juizo", "servo", "viril", "sabio", "coisa", "manso", "ontem", "presa", "falar", "cunho",
        "forma", "devir", "mesmo", "meiga", "afago", "fluir", "ebrio", "plato", "vendo", "limbo",
        "serio", "guisa", "magoa", "posso", "visar", "heroi", "temer", "acaso", "pleno", "puder",
        "valor", "cisma", "bruma", "lugar", "impio", "exodo", "afins", "obvio", "certo", "gerar",
        "obter", "crise", "matiz", "praxe", "senil", "havia", "todos", "venia", "fluxo", "enfim",
        "abrir", "tedio", "ritmo", "alibi", "falso", "uniao", "tomar", "garbo", "visao", "parvo",
        "facil", "valia", "reter", "pulha", "vital", "favor", "bravo", "grato", "prumo", "vivaz",
        "legal", "parco", "genio", "laico", "burro", "olhar", "possa", "levar", "ameno", "reles",
        "tecer", "casta", "obito", "prime", "selar", "morte", "ranço", "anelo", "fator", "noçao",
        "sabia", "rogar", "noite", "façam", "citar", "farsa", "cabal", "achar", "falta", "adiar",
        "nicho", "coeso", "epico", "cisao", "ouvir", "fardo", "brega", "viver", "ativo", "força",
        "sinto", "gente", "exato", "imune", "passo", "sonso", "amplo", "dubio", "linda", "tendo",
        "cesta", "unico", "sulco", "lavra", "leigo", "sesta", "calma", "revel", "deter", "labor",
        "vemos", "rever", "gesto", "humor", "arduo", "atuar", "pobre", "feixe", "ciume", "carma",
        "ajuda", "tende", "outro", "otica", "igual", "velho", "ponto", "claro", "toada", "hiato",
        "ideal", "sonsa", "debil", "vacuo", "terno", "ambos", "remir", "fusao", "probo", "senao",
        "fonte", "marco", "jovem", "leito", "advem", "capaz", "inata", "terra", "doido", "horda",
        "xeque", "relva", "tenra", "ficar", "algum", "velar", "caçar", "serie", "farao", "lider",
        "apoio", "coçar", "vazio", "anuir", "tanto", "vimos", "rigor", "verso", "entre", "dorso",
        "botar", "frase", "pouco", "signo", "sente", "massa", "coesa", "cruel", "raiva", "moçao",
        "prece", "ambas", "virus", "feito", "fauna", "morar", "peste", "minha", "papel", "casto",
        "covil", "credo", "preso", "torço", "ciclo", "impar", "faina", "lazer", "furor", "brisa",
        "docil", "flora", "chata", "maior", "vetor", "trama", "arido", "blase", "houve", "pegar",
        "nossa", "aceso", "beata", "adeus", "banzo", "manha", "setor", "vulto", "liame", "breve",
        "senda", "seita", "vasto", "salvo", "ardor", "livro", "peixe", "morro", "visse", "chuva",
        "pecha", "sorte", "atomo", "comer", "antro", "prado", "reger", "plano", "saiba", "ocaso",
        "segue", "rezar", "avaro", "carro", "pajem", "nunca", "alias", "saida", "otimo", "aureo",
        "junto", "mudar", "ancia", "acima", "chulo", "serao", "opçao", "fitar", "parar", "jazia",
        "fruir", "treta", "fugir", "naçao", "andar", "grupo", "bando", "prazo", "leite", "gerir",
        "lenda", "motim", "norma", "tosco", "alude", "rapaz", "brava", "parte", "epoca", "campo",
        "sinha", "tenso", "exame", "idolo", "aviao", "arcar", "psico", "tirar", "reino", "malta",
        "venal", "agora", "vilao", "praga", "soldo", "praia", "quota", "risco", "aonde", "indio",
        "corpo", "antes", "logro", "sumir", "preto", "virao", "traga", "voraz", "fixar", "pompa",
        "cheio", "quase", "texto", "exijo", "filho", "certa", "turba", "copia", "nodoa", "oasis",
        "apego", "prova", "alado", "solto", "caixa", "turva", "acesa", "estao", "messe", "conta",
        "grave", "ligar", "atrio", "verbo", "nivel", "doido", "verve", "parva", "apelo", "tocar",
        "aurea", "lindo", "trupe", "pardo", "festa", "livre", "fenda", "fraco", "dessa", "sabia",
        "opaco", "afora", "alçar", "oxala", "viria", "navio", "parca", "jirau", "retem", "ficha",
        "astro", "manha", "fatos", "faixa", "etico", "elite", "lidar", "mente", "fatal", "glosa",
        "supra", "tinha", "autor", "firme", "magia", "grata", "verba", "cioso", "bater", "reses",
        "pique", "calda", "cousa", "junco", "salve", "deixa", "prive", "irmao", "pagao", "douto",
        "macio", "atual", "molho", "abriu", "posto", "light", "supor", "torso", "sexta", "vezes",
        "turvo", "sarça", "longe", "asilo", "extra", "igneo", "judeu", "curso", "orfao", "caber",
        "drops", "locus", "porta", "ossos", "latir", "galho", "canoa", "lagoa", "arara", "cinco",
        "besta", "cinza", "lilas", "crase", "touca", "botao", "rouca", "radio", "desta", "ruina",
        "corsa", "palio", "palha", "video", "zelar", "combo", "vosso", "nosso", "vinha", "culpa",

       "bioma", "menos", "ereto", "finda", "paira", "bonus", "agudo", "feudo", "facto", "advir",
        "urgia", "cutis", "traço", "meigo", "surja", "tetra", "sitio", "super", "julia", "facho",
        "suave", "autos", "amena", "rumor", "tento", "pilar", "turma", "cocho", "clean", "museu",
        "chama", "açoes", "louça", "lasso", "geral", "mosto", "lapis", "local", "hobby", "acola",
        "optar", "podio", "boato", "medir", "rubro", "pacto", "crime", "refem", "folga", "brabo",
        "penta", "pareo", "letal", "ponha", "drama", "poema", "aluno", "mesma", "movel", "cacho",
        "feroz", "vigia", "aroma", "metie", "hoste", "chato", "avida", "cover", "golpe", "vetar",
        "pasmo", "monte", "rival", "teste", "fazia", "piada", "finjo", "coral", "ecoar", "axila",
        "forum", "limao", "daqui", "forem", "riste", "verde", "poeta", "carta", "monge", "miolo",
        "tente", "plebe", "clima", "artur", "passa", "lesse", "sucia", "cetro", "ebano", "tacha",
        "escol", "ateia", "calmo", "briga", "falha", "venha", "roupa", "macro", "busca", "conto",
        "sarau", "idoso", "plumo", "cargo", "viram", "aviso", "tribo", "plaga", "perco", "fruto",
        "tarde", "legua", "atimo", "farta", "chefe", "berro", "vento", "grama", "virar", "civil",
        "catre", "arado", "corso", "surto", "seixo", "ornar", "saldo", "assar", "traje", "unica",
        "bruta", "pedra", "manga", "beijo", "nuvem", "amiga", "fosso", "recem", "troca", "manga",
        "deste", "casar", "giria", "uteis", "trato", "magna", "porte", "vedar", "sosia", "depor",
        "arfar", "deram", "canso", "tiver", "itens", "amado", "tutor", "ambar", "silvo", "irado",
        "grota", "bazar", "cifra", "vazao", "gabar", "renda", "pinho", "perto", "bruto", "rural",
        "jejum", "laudo", "pasma", "midia", "pavor", "regio", "inter", "feita", "tchau", "segar",
        "nesse", "fossa", "orgao", "minar", "odiar", "troco", "vagar", "vadio", "molde", "clero",
        "pomar", "sotao", "lesto", "stand", "aviar", "amada", "negar", "mamae", "cenho", "canto",
        "rocha", "lesao", "cinto", "largo", "paiol", "visto", "bolsa", "horto", "close", "proto",
        "ruido", "ileso", "morfo", "densa", "xucro", "pugna", "inves", "marca", "jogar", "podar",
        "vista", "urdir", "chula", "ufano", "penso", "vasta", "mocho", "frota", "civel", "cheia",
        "bulir", "umido", "piche", "ubere", "linha", "esgar", "peita", "resto", "apear", "tenha",
        "santo", "misto", "fundo", "agape", "volta", "manto", "cerca", "narco", "logos", "nessa",
        "natal", "monta", "velha", "demao", "simio", "jazer", "fazes", "findo", "barao", "campa",
        "ferpa", "verao", "prego", "chaga", "ardis", "polis", "mover", "album", "letra", "cosmo",
        "etapa", "balao", "tropa", "calvo", "lindo", "poste", "pingo", "polir", "retro", "nesta",
        "seiva", "banto", "matar", "folia", "coroa", "venho", "trago", "alamo", "troco", "punha",
        "ceita", "audio", "final", "sabor", "barro", "redor", "louro", "rente", "calma", "sigla",
        "salva", "bolso", "firma", "arroz", "queda", "farol", "torna", "coevo", "folha", "enjoo",
        "lutar", "solta", "lousa", "tumba", "miope", "mimar", "burra", "baixa", "neste", "salmo",
        "fugiu", "ousar", "todas", "veloz", "corar", "zumbi", "nacar", "calor", "longo", "reler",
        "forro", "vasco", "obtem", "justa", "vazia", "fatuo", "penca", "quero", "ilhas", "cacto",
        "calvo", "gueto", "bedel", "feliz", "vario", "farto", "chave", "limao", "meiao", "logia",
        "mania", "lucro", "quite", "repor", "sugar", "sexto", "puido", "custo", "subir", "staff",
        "ultra", "urgir", "passe", "sadio", "refil", "viger", "valer", "versa", "hifen", "lento",
        "louca", "usual", "cardo", "redea", "nariz", "socio", "corte", "mouro", "aereo", "ceifa",
        "modal", "ferir", "garra", "voilà", "anzol", "abade", "nesga", "pluma", "sofia", "outra",
        "patio", "dados", "grife", "labil", "diabo", "raiar", "pavio", "sabia", "trair", "skate",
        "pagar", "roubo", "pazes", "dique", "xampu", "tacho", "podre", "disso", "surra", "tibio",
        "filme", "abono", "caibo", "cisco", "farei", "dobro", "jeova", "domar", "digna", "couve",
        "quais", "posta", "regia", "notar", "bruxa", "barra", "regem", "volto", "toque", "buril",
        "bruno", "seria", "estou", "saias", "morto", "morta", "breno", "tinto", "pista", "serra",
        "moita", "loira", "loiro", "pouca", "lenco", "lente", "lotar", "casam", "facam", "facao",
        "finge", "adoro", "cilio", "dolar", "curto", "curta", "ligas", "cegas", "cegos", "cegar",
        "cagar", "gotas", "gatas", "gatos", "manco", "sinta", "sorri", "olhos", "olham", "feios",
        "feias", "celta", "coube", "trave", "tinta", "lerda", "lenta", "lerdo", "couro", "luxar",
        "lesar", "torto", "torta", "totem", "traco", "dunas", "jegue", "carpa", "artes", "facas",
        "faces", "cento", "senta", "sento", "sucos", "tacos", "zebra", "harpa", "doida", "lince",
        "tigre", "cacau", "cocos", "chove", "birra", "banho", "balde", "brita", "banha", "camas",
        "cafes", "girar", "grito", "grita", "pirar", "poupa", "polpa", "poupe", "traem", "tirou",
        "fotos", "fulga", "surge", "unhas", "trote", "dente", "truco", "dicas", "sacar", "solte",
        "cesto", "corta", "trigo", "banco", "bolas", "tampa", "banca", "beija", "brejo", "sapos",
        "latas", "latim", "lupas", "lorde", "venta", "vapor", "lixos", "ponte", "prata", "prato",
        "patos", "panda", "pudim", "pente", "jogos", "jarra", "jarro", "tetos", "cubos", "calca",
        "perda", "palco", "talco", "tabua", "corre", "corra", "menta", "balas", "lojas", "banda",
        "colar", "calos", "ziper", "vagem", "pasto", "parto", "mamao", "bomba", "patas", "livra",
        "licor", "media", "ronda", "tecla", "trufa", "prima", "primo", "novas", "filha", "fadas",
        "fusca", "podia", "naves", "rotas", "trevo", "mosca", "ponta", "soube", "dedos", "dorme",
        "limpo", "resta", "durar", "vidas", "capas", "tenda", "barco", "veado", "cobra", "porco",
        "timao", "aguia", "acaro", "cervo", "chita", "forca", "luvas", "lulas", "algas", "trena",
        "norte", "leste", "labia", "nocao", "veste", "chale", "chule", "pasta", "greve", "furto",
        "rouba", "lotes", "minas", "matos", "motos", "cerco", "lajes", "jacas", "cedro", "garfo",
        "golfe", "china", "trono", "torce", "torca", "vinte", "vesgo", "pures", "pruma", "corda",
        "cobre", "cubra", "nasce", "longa", "graus", "gasto", "gasta", "ganso", "aguda", "olhem",
        "filas", "fogem", "pocos", "larga", "lirio", "litio", "musgo", "vespa", "cinta", "solos",
        "santa", "pouso", "pousa", "obras", "prega", "limas", "ratos", "ratas", "pisos", "macas",
        "volte", "tenta", "chipa", "xerox", "casca", "casco", "caspa", "sopas", "minta", "brigo",
        "eleva", "mitos", "micos", "somas", "casos", "casas", "rompe", "figos", "peras", "ditar",
        "meses", "mesas", "tiara", "morsa", "ferro", "testa", "tenis", "cipos", "metas", "setas",
        "bocas", "bingo", "pinga", "penas", "penal", "lagos", "golas", "finos", "calar", "forme",
        "morde", "mudos", "mudas", "mofar", "fungo", "lhama", "focar", "focas", "fofos", "fofas",
        "chora", "bamba", "bonde", "total", "siris", "treva", "lesma", "lacos", "botes", "dizem",
        "perde", "lambe", "grade", "tiram", "foice", "viaja", "telas", "pisar", "clone", "clona"]

var listaDeTentativas = []

listaDeTentativas = listaDeTentativas.concat(listaDePalavras);

var palavra = listaDePalavras[Math.floor(Math.random()*listaDePalavras.length)].toUpperCase();
console.log(palavra);

window.onload = function() {
    iniciar();
}

function iniciar() {
        //sei que no index.html ficaria mais legível, fiz por função pra treinar o js 
        // cria o "tabuleiro"
    for ( let r = 0; r < numeroTentativas; r++) {
        for (let c = 0; c < tamanhoDaPalavra; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
    //Cria o teclado
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L",''],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]
    for (let i= 0; i < keyboard.length; i++) {
        let fileiraAtual = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < fileiraAtual.length; j++) {
            let keyTile = document.createElement("div");

            let key = fileiraAtual[j];
            keyTile.innerText = key;
            if (key == 'Enter') {
               keyTile.id = "Enter"; 
            }
        
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key;
            }
            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");

            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);

        }
        document.body.appendChild(keyboardRow);
    }
    //espera apertar a tecla
    document.addEventListener('keyup', (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (fimDeJogo) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (coluna < tamanhoDaPalavra) {
            let currTile = document.getElementById(fileira.toString() + '-' + coluna.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                coluna += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < coluna && coluna <= tamanhoDaPalavra) {
            coluna -=1;
        }
        let currTile = document.getElementById(fileira.toString() + '-' + coluna.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!fimDeJogo && fileira == numeroTentativas) {
        fimDeJogo = true;
        document.getElementById("answer").innerText = palavra;
    }
}

function update() {
    let tentativa = "";
    document.getElementById("answer").innerText = "";
    

    //sequencia a tentativa
    for (let c = 0; c < tamanhoDaPalavra; c++) {
        let currTile = document.getElementById(fileira.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        tentativa += letter;
    }

    tentativa = tentativa.toLowerCase();
    console.log(tentativa);

    if (!listaDeTentativas.includes(tentativa)) {
        document.getElementById("answer").innerText = "Não está na lista de palavras";
        return;
    }

    //começa o jogo
    let correct = 0;
    
    let letterCount = {};

    for (let i = 0; i < palavra.length; i++) {
        let letter = palavra[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        }
        else {
            letterCount[letter] = 1;
        }
    }
    console.log(letterCount)

    //primeira iteração, checando as corretas
    for (let c = 0; c < tamanhoDaPalavra; c++) {
        let currTile = document.getElementById(fileira.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //tá na posição correta?
        if (palavra[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1;
        }
        if (correct == tamanhoDaPalavra) {
            fimDeJogo = true;
            startConfetti();
        }
    }
    console.log(letterCount);
    //segunda iteração, checando as presentes na posição errada
    for (let c = 0; c < tamanhoDaPalavra; c++) {
        let currTile = document.getElementById(fileira.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if (!currTile.classList.contains("correct")) {
            //tá na palavra?
            if (palavra.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }        
                letterCount[letter] -= 1;
            }//Não tá na palavra:
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent")
            }
        } 
    }

fileira += 1; //começa uma nova fileira
coluna = 0; //começa a nova fileira do ínicio, primeiro input na primeira coluna 
}