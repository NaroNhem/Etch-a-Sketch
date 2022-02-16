const container = document.getElementById('container'); 


function gridSize(cols,rows){
    container.style.setProperty("--grid-cols", cols);
    container.style.setProperty("--grid-rows", rows);
    for ( let c = 0; c < (cols*rows); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

const slide = document.getElementById('slider');
let output = document.getElementById('size');
output.innerHTML = slide.value; 
 
let gridCount = slide.value;
slide.oninput = function () {
    output.innerHTML = this.value;
    return output.innerHTML;
}

gridSize(gridCount,gridCount);

