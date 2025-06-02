// Constants
const DEFAULT_PIXEL_SIZE = 16;


//Creates divs in a square grid according to grid size
function createGrid(gridSize){

    //Conatiner size on page
    const gridSizePx = 900;

    //Pixel size based on container size
    const pixelSize = gridSizePx / gridSize;

    const gridContainer = document.createElement("div");
    gridContainer.id = "container";
    gridContainer.style.display = "flex";
    gridContainer.style.flexDirection = "column";
    gridContainer.style.width = `${gridSizePx}px`;
    gridContainer.style.height = `${gridSizePx}px`;
    gridContainer.style.border = "1px solid black";
    gridContainer.style.boxSizing = "border-box";

    //Grid creation
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1";

        for (let j = 0; j < gridSize; j++){
            const pixelDiv = document.createElement("div");
            pixelDiv.className = "pixelDiv";
            pixelDiv.style.width = `${pixelSize}px`
            pixelDiv.style.height = `${pixelSize}px`
            row.appendChild(pixelDiv);
        }
        gridContainer.appendChild(row);
    }

    document.body.appendChild(gridContainer);
    addPixelListeners();
}
// loops through each pixelDiv and adds the event listener
function addPixelListeners() {
    const pixels = document.querySelectorAll(".pixelDiv");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", () => {
            pixel.style.backgroundColor = "red";
        });
    });
}


// removes all content in the gridContainer div
function resetContainer () {
    const oldGrid = document.getElementById("container");
    if (oldGrid) {
        oldGrid.remove();
    }
}


function createResizeButton() {
    const resizeButton = document.createElement("button");
    resizeButton.textContent = "Resize Grid";
    resizeButton.style.fontWeight = "bold";
    resizeButton.style.fontSize = "26px";
    resizeButton.style.width = "280px";
    resizeButton.style.marginBottom = "24px";
    resizeButton.style.marginTop = "24px";

    document.body.appendChild(resizeButton)

    resizeButton.addEventListener("click", () => {
        let newSize = -1;
        while (newSize > 100 || newSize < 1 || isNaN(newSize)) {
            newSize = parseInt(prompt("Please enter a new grid size! (1 to 100):"));
        }
        resetContainer();
        createGrid(newSize);
    });
}

//Main function calls on doc load
document.addEventListener("DOMContentLoaded", () => {
    createResizeButton();
    createGrid(DEFAULT_PIXEL_SIZE);
});