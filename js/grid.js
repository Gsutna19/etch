function setSize() {
    let size = prompt("Please enter a number for the grid size.");

    if (size != null) {
        return size;
    }
}

function createGrid(size) {
    // let gridDiv = document.createElement("div");
    // gridDiv.className = "square";

    for ( let i = 0; i < size; i++) {
        // console.log(i);
        let gridDiv = document.createElement("div");
        gridDiv.className = "square";
        document.getElementById("container").appendChild(gridDiv);
    }
}

let gridSize = setSize();
createGrid(gridSize);