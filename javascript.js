// Constants
const DEFAULT_PIXEL_SIZE = 64;


//Creates divs in a square grid according to grid size
function createGrid(gridSize){
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "gridContainer");
    document.body.appendChild(gridContainer);

    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++){
            const pixelDiv = document.createElement("div");
            pixelDiv.classList.add("pixelDiv");
            row.appendChild(pixelDiv);
        }
        
        gridContainer.appendChild(row);
        console.log(`created grid row ${i}`);
    }
    // Creates "drawing" interaction for each "pixel"
    const pixels = document.querySelectorAll("pixelDiv");

    pixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", () => {
            pixel.style.backgroundColor = "red";
            console.log("changed color")
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid(DEFAULT_PIXEL_SIZE);

    const pixels = document.querySelectorAll(".pixelDiv");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", () => {
            pixel.style.backgroundColor = "red";
        });
    });
});


