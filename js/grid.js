function createGrid() {
    // let gridDiv = document.createElement("div");
    // gridDiv.className = "square";

    for ( let i = 0; i < 10; i++) {
        console.log(i);
        let gridDiv = document.createElement("div");
        gridDiv.className = "square";
        document.getElementById("container").appendChild(gridDiv);
    }

    
}

createGrid();