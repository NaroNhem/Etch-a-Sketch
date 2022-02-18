const container = document.getElementById('container'); 



function gridSize(cols,rows){
    container.style.setProperty("--grid-cols", cols);
    container.style.setProperty("--grid-rows", rows);
    for ( let c = 0; c <= (cols*rows); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", mouseOver);
        function mouseOver(event) {
            let colorpicker = document.getElementById('colorpicker');
            let color = colorpicker.value;
            cell.style.backgroundColor = color;
        }
        if (c == 0 ){
            document.getElementById('container').innerHTML = "";
        }
    };
};

const slide = document.getElementById('slider');
let output = document.getElementById('size');
output.innerHTML = slide.value; 

slide.onclick = gridSize(output.innerHTML, output.innerHTML)

slide.oninput = function () {
    output.innerHTML = this.value;
    let x = output.innerHTML;
    gridSize(x,x);
}


function clearCanvas() {
    document.getElementById('container').innerHTML = "";
    slide.onclick = gridSize(output.innerHTML, output.innerHTML)
}






 


