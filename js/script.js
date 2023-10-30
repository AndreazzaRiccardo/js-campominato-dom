const playBtn         = document.getElementById("play");
const difficultSelect = document.getElementById("difficult");
const gridElem        = document.querySelector(".grid");

playBtn.addEventListener("click", function(event){
    event.preventDefault();
    gridElem.innerHTML    = "";
    gridElem.style.border = "2px solid black";
    let gridSize;
    let cellSize;

    switch(difficultSelect.value) {
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

function handleCellClick() {
    const clickedNumber = parseInt(this.textContent);
    this.style.backgroundColor = "lightblue"
    console.log(clickedNumber);
}