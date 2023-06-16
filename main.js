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

function getMono() {
    const colors = [];
    for (let x = 1; x < 11; x++) {
        const alpha = x / 10;
        const color = `rgba(0, 0, 0, ${alpha})`;
        colors.push(color);
    }
    return colors;
}

let gradationIndex = 0;

function  monoHover() {
    function handleHover(event) {
        const target = event.target;
        if (event.target.classList.contains("pixel")) {
            const gradations = getMono();
            target.style.backgroundColor = gradations[gradationIndex];
            gradationIndex = (gradationIndex + 1) % gradations.length;
        }
    }

    //different event listerns handled by handleHover()
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("touchstart", handleHover);
    document.addEventListener("touchmove", handleHover);
}


function erasePad() {
    const elements = document.getElementsByClassName("pixel");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "whitesmoke";   
    }
}

// button section
const gridBtn = document.getElementById("new-grid-btn");
gridBtn.addEventListener("click", function() {
    const gridSizeInput = document.getElementById("grid-size").value;
    // parseInt makes sure value is a number
    const gridSize = parseInt(gridSizeInput);
    createGrid(gridSize);
});

const colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", () => {
    erasePad();
    colorHover();
});

const monoBtn = document.getElementById("mono-btn");
monoBtn.addEventListener("click", () => {
    erasePad();
    monoHover();
});

const eraseBtn = document.getElementById("erase-btn");
eraseBtn.addEventListener("click", () => {
    erasePad();
});

window.addEventListener("load", function(){
    const defaultGridSize = parseInt(document.getElementById("grid-size").value);
    createGrid(defaultGridSize);
    colorHover();
});
