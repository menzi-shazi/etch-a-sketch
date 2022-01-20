
let body = document.querySelector("body");
let grid = document.createElement("div");
grid.classList.add("grid-container");
let gridItem = document.createElement("div");

for (let i = 0;i < 256;++i){
    gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover",(e) =>{
        e.target.style.background= "red";
    });
    grid.appendChild(gridItem);
}

let button = document.querySelector("button");
button.addEventListener("click",() => {
    gridItem = document.querySelectorAll(".grid-item");

    let gridNumber = parseInt(prompt("Enter number of grid items:"));
    let gridItemSize = grid.offsetHeight/gridNumber;

    for (let i = 0;i < gridItem.length;++i){
        gridItem[i].remove()
    }
    for (let i = 0;i < gridNumber*gridNumber;++i){
        gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.addEventListener("mouseover",(e) =>{
            e.target.style.background= "red";
        });
        grid.appendChild(gridItem);
    }
    grid.style.gridTemplateColumns = `repeat(${gridNumber},${gridItemSize}px)`;
    grid.style.gridTemplateRows = `repeat(${gridNumber},${gridItemSize}px)`;
    
    for (let i = 0;i < gridItem.length ;++i){
        gridItem[i].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
});

body.appendChild(grid);
