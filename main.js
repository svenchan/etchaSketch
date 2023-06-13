const sketchpad = document.getElementById("sketchpad");


function createGrid(number) {
    sketchpad.innerHTML = "";
    for (let x = 0; x < number; x++) {
        let newRow = document.createElement("div");
        newRow.id = "newRow" + x;
        newRow.classList.add("row");
        sketchpad.appendChild(newRow);

        for (let y = 0; y < number; y++) {
            let newCol = document.createElement("div");
            newCol.classList.add("pixel");
            newRow.appendChild(newCol);
        };    
    };
}

const gridBtn = document.getElementById("new-grid-btn");
gridBtn.addEventListener("click", function() {
    const gridSizeInput = document.getElementById("grid-size").value;
    const gridSize = parseInt(gridSizeInput);
    createGrid(gridSize);
    console.log(`grid with gridsize: ${gridSize}`);
})

