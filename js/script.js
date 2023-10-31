const playBtn   = document.getElementById("play");
const difficult = document.getElementById("difficult");
const gridElem  = document.querySelector(".grid");
const result    = document.querySelector(".result");
let clickCell   = [];
let bombs       = [];
let gridSize


playBtn.addEventListener("click", function(event){
    event.preventDefault();

    gridElem.innerHTML    = "";
    gridElem.style.border = "2px solid black";
    result.innerHTML      = "";
    let cellSize
    clickCell = [];
    
    switch(difficult.value) {
        case "easy":
            gridSize = 100;
            cellSize = "10"
            break
        case "medium":
            gridSize = 81;
            cellSize = "9"
            break
        case "hard":
            gridSize = 49;
            cellSize = "7"
            break
        default:
            gridSize = 100;
            cellSize = "10"
            break
    }

    for (let i = 1; i <= gridSize; i++) {
        const cell = generateGridCell(i, cellSize)
        cell.addEventListener("click", handleCellClick);
        gridElem.append(cell);
    }

    bombs = generateBombs(gridSize);
    console.log(bombs);
})




/****************************************
| * FUNZIONI:
++++++++++++++++++++++++++++++++++++++++/

/**
 * Genera una cella della griglia con un numero all'interno
 * @param {number} innerNumber
 * @returns {any} HTML element cell
 */
function generateGridCell(innerNumber, cellSize) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width = `calc(100% / ${cellSize})`
    newCell.innerHTML = parseInt(innerNumber);
    return newCell;
}


/**
 * Genera un'array di 16 numeri casuali non ripetuti, compresi tra 1 e X numeri
 * @param {number} max
 * @returns {array}
 */
function generateBombs(max) {
    const resultBomb = [];
    while(resultBomb.length < 16) {
        let rndNum = getRndInteger(1, max)
        if(!resultBomb.includes(rndNum)){
            resultBomb.push(rndNum)
        }
    }
    return resultBomb;
}


/**
 * Gestisce tutto il comportamento del gioco, al click di ogni cella
 * * @returns {any}
 */
function handleCellClick() {
    let maxClick    = gridSize - bombs.length;
    const clickedNumber = parseInt(this.textContent);
    result.innerHTML = "";
        if(bombs.includes(clickedNumber)){
            this.classList.add("bomb");
            result.innerHTML = `HAI PERSO DOPO ${clickCell.length} TENTATIVI`;
            gameEnd();  
        } else {
            if(!clickCell.includes(clickedNumber)){
                clickCell.push(clickedNumber);
                if(bombs.includes(clickedNumber - 1) || bombs.includes(clickedNumber + 1)){
                    result.innerHTML = "ATTENTO, HAI UNA BOMBA VICINO!"
                    this.style.backgroundColor = "darkorange";
                } else {
                    this.style.backgroundColor = "lightblue";
                }
            }
            
            if (clickCell.length === maxClick){
                result.innerHTML = "COMPLIMENTI! HAI VINTO!";
                gameEnd();
            }
        }
}


/**
 * Genera un numero casuale compreso tra un numero min e uno max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Gestisce il comportamento della griglia e delle bombe al finire del gioco
 * @returns {any}
 */
function gameEnd() {
    const allCell = document.querySelectorAll(".cell");
            for (let i = 0; i < allCell.length; i++) {
                const singleCell = allCell[i];
                singleCell.removeEventListener("click", handleCellClick);
                if(bombs.includes(parseInt(singleCell.textContent))) {
                    singleCell.style.backgroundColor = "darkred";
                }
            }
}