function setSize() {
    let size = prompt("Please enter a number for the grid size.");

    if (size != null) {
        return size;
    }
}

function createGrid() {
    // let gridDiv = document.createElement("div");
    // gridDiv.className = "square";

    for ( let i = 0; i < 10; i++) {
        // console.log(i);
        let gridDiv = document.createElement("div");
        gridDiv.className = "square";
        document.getElementById("container").appendChild(gridDiv);
    }

    
}

createGrid();