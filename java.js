//
//Para Astronomía
//

function If() {
    let n = parseInt(document.getElementById("numIf").value);
    if (n >= 1 && n <= 2) {
        document.getElementById("If").innerText = "Debil o no visible";
    } else if (n >= 3 && n <= 4) {
        document.getElementById("If").innerText = "Brillante";
    } else if (n >= 5 && n <= 6) {
        document.getElementById("If").innerText = "Muy brillante";
    } else if (n >= 7 && n <= 10) {
        document.getElementById("If").innerText = "Extremadamente brillante";
    } else {
        document.getElementById("If").innerText = "No es un numero del 1 al 10";
    }
}

function distancia() {
    let cantidad = parseInt(document.getElementById("cant").value);
    let suma = 0;
    for (let i = 1; i <= cantidad; i++) {
    let distancia = parseFloat(prompt("Ingresa la distancia del planeta " + i));
    suma = suma + distancia;
}
    let promedio = suma / cantidad;
    document.getElementById("distancia").innerText = "El promedio es: " + promedio;
}
let suma = 0;

function contarCrateres() {
    let diametro;
    let contador = 0;
diametro = parseFloat(prompt("Ingresa el diámetro del cráter (0 para terminar)"));
while(diametro != 0){
    if(diametro > 50){
    contador = contador + 1;
    }
    diametro = parseFloat(prompt("Ingresa el diámetro del cráter (0 para terminar)"));
}

    document.getElementById("resultadoCrateres").innerText = 
    "Cráteres mayores a 50 km: " + contador;
}

function cuerpo() {
    let codigo = parseInt(document.getElementById("co").value);
    let mensaje = "";
    switch(codigo){
    case 1:
        mensaje = "Estrella";
        break;
    case 2:
        mensaje = "Planeta";
        break;
    case 3:
        mensaje = "Cometa";
        break;
    case 4:
        mensaje = "Asteroide";
        break;
    case 5:
        mensaje = "Galaxia";
        break;
    default:
    mensaje = "Código inválido";
}
document.getElementById("cuerpo").innerText = mensaje;
}

function registroLuz() {
    let luz;
    do {
        luz = prompt("Ingresa nivel de luz (lux), escribe 'no' para terminar)");
    if(luz != "no"){
        let valor = parseFloat(luz);
    if(valor < 5){
        alert("Noche profunda");
    }
    }
} while(luz != "no");
    document.getElementById("resultadoLuz").innerText = "Registro terminado";
}

//
// para el Medio ambiente 
//

function aire(){
    let a = parseInt(prompt("AQI:"));
    if(a<=50) r="Bueno";
    else if(a<=100) r="Moderado";
    else if(a<=150) r="Dañino sensible";
    else if(a<=200) r="Dañino";
    else r="Muy dañino";
    document.getElementById("r1").innerText = r;
}

function ruido(){
    let n = parseInt(prompt("Cuántas mediciones?"));
    let s = 0;
    for(let i=1;i<=n;i++){
    s += parseFloat(prompt("dB "+i));
}
    document.getElementById("r2").innerText = "Promedio: " + (s/n);
}

function focos(){
    let t = parseFloat(prompt("Temp (0 fin):"));
    let c = 0;
    while(t!=0){
    if(t>45) c++;
    t = parseFloat(prompt("Temp (0 fin):"));
}
    document.getElementById("r3").innerText = "Focos: " + c;
}

function residuo(){
    let x = parseInt(document.getElementById("cod").value);
    let r = "";
    switch(x){
    case 1: r="Orgánico"; break;
    case 2: r="Plástico"; break;
    case 3: r="Papel"; break;
    case 4: r="Vidrio"; break;
    default: r="Inválido";
}
    document.getElementById("r4").innerText = r;
}

function rio(){
    let v;
    do{
    v = prompt("Nivel del río (no fin):");
    if(v!="no" && parseFloat(v)>3){
    alert("Río alto!");
    }
} while(v!="no");
document.getElementById("r5").innerText = "Fin del monitoreo";
}

//
//Para Salud
//

function presion(){
    let s = parseInt(prompt("Presión sistólica:"));
    let d = parseInt(prompt("Presión diastólica:"));
    let r="";

    if(s<120 && d<80) r="Normal";
    else if(s<130 && d<80) r="Elevada";
    else if(s<140 || d<90) r="HTA grado 1";
    else r="HTA grado 2";

    document.getElementById("p1").innerText = r;
}

function tempPacientes(){
    let n = parseInt(prompt("Número de pacientes:"));
    let suma = 0;
        for(let i=1;i<=n;i++){
            suma += parseFloat(prompt("Temperatura " + i));
}
document.getElementById("p2").innerText = "Promedio: " + (suma/n);
}

function fiebre(){
    let t = parseFloat(prompt("Temperatura (0 fin):"));
    let c = 0;
        while(t!=0){
            if(t>=38) c++;
            t = parseFloat(prompt("Temperatura (0 fin):"));
}
    document.getElementById("p3").innerText = "Con fiebre: " + c;
}

function triage(){
    let x = parseInt(document.getElementById("tri").value);
    let r="";
    switch(x){
        case 1: r="Rojo"; break;
        case 2: r="Amarillo"; break;
        case 3: r="Verde"; break;
        case 4: r="Azul"; break;
    default: r="Código inválido";
}
document.getElementById("p4").innerText = r;
}

function saturacion(){
    let v;
    do{
    v = prompt("SpO2 (no fin):");
} while(v!="no");
    document.getElementById("p5").innerText = "Mediciones terminadas";
}