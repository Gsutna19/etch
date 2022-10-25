function restartGrid() {
    let container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function setSize() {
    let size = prompt("Please enter a number for the grid size.");

    if (size > 100) {
        size = 100;
        return size;
    } else if (size != null) {
        return size;
    }
}

function createRows(size) {
    // let gridDiv = document.createElement("div");
    // gridDiv.className = "square";


    for ( let i = 0; i < size; i++) {
        // console.log(i);
        let gridDiv = document.createElement("div");
        gridDiv.className = "row";
        gridDiv.id = i;
        // gridDiv.classList.add = ('square', 'row');
        document.getElementById("container").appendChild(gridDiv);
    }
}

function populateRows(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            let gridDiv = document.createElement("div");
            gridDiv.className = "square";
            document.getElementById(i).appendChild(gridDiv);
            checkHover(gridDiv);
        }
    }
}

function checkHover(div) {
    // let hovered = document.getElementsByClassName(".square");



    div.addEventListener("mouseover", () => {
        div.classList.add("painted");
    });


    // .forEach(div => {

    //     div.addEventListener("mouseover", function() {
    //         div.classList.add = "painted";
    //     });
    //     div.addEventListener("mouseout", function() {
    //         div.classList.add = "painted";
    //     });
    // });
}

function draw() {

    restartGrid();

    let gridSize = setSize();

    createRows(gridSize);
    populateRows(gridSize);
    checkHover();
}