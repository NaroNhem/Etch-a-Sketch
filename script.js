const container = document.getElementById('container'); 


function gridSize(rows,cols){
    container.style.setProperty("--grid-cols", cols);
    container.style.setProperty("--grid-rows", rows);
    for ( let c = 0; c < (cols*rows); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

gridSize(16,16);