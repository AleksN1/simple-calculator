function sum() {
    let x = parseFloat(document.getElementById("input_x").value);
    let y = parseFloat(document.getElementById("input_y").value);
    let rez = x + y;
    document.getElementById("output").innerHTML = rez;

//console.log (x, y, rez)
}

function sub() {
    let x = parseFloat(document.getElementById("input_x").value);
    let y = parseFloat(document.getElementById("input_y").value);
    let rez = x - y;
    document.getElementById("output").innerHTML = rez;
    
//console.log (x, y, rez)
}

function mul() {
    let x = parseFloat(document.getElementById("input_x").value);
    let y = parseFloat(document.getElementById("input_y").value);
    let rez = x * y;
    document.getElementById("output").innerHTML = rez;
    
//console.log (x, y, rez)
}

function div() {
    let x = parseFloat(document.getElementById("input_x").value);
    let y = parseFloat(document.getElementById("input_y").value);
    let rez = x / y;
    document.getElementById("output").innerHTML = rez;
    
//console.log (x, y, rez)
}
