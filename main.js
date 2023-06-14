const sketchpad = document.getElementById("sketchpad");

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`  
}

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

function colorHover() {
    document.addEventListener("mouseover",　(event) => {
        const target = event.target;
        if (target.classList.contains("pixel")) {
            event.target.style.backgroundColor = getRandomColor();
        }
    });
}

// button section
const gridBtn = document.getElementById("new-grid-btn");
gridBtn.addEventListener("click", function() {
    const gridSizeInput = document.getElementById("grid-size").value;
    // parseInt makes sure value is a number
    const gridSize = parseInt(gridSizeInput);
    createGrid(gridSize);
    console.log(`grid with gridsize: ${gridSize}`);
});

const colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", () => {
    colorHover();
});
