const sunny = {
        id: 1,
        nombre: 'Sunny Modelo Mts 290',
        precio: 61500,
        imagen: './imgs/biciCeleste.png'
}

const proLady = {
        id: 2,
        nombre: 'bike SLP 25 Pro Lady',
        precio: 62109,
        imagen: './imgs/biciAmarilla.png'
}

const topmega = {
        id: 3,
        nombre: 'Bicicleta Topmega Sunshine',
        precio: 78867,
        imagen: './imgs/biciNegra.png'
}

const specialized = {
        id: 4,
        nombre: 'Specialized',
        precio: 79839,
        imagen: './imgs/biciVerdeAgua.png'    
}

const trek = {
        id: 5,
        nombre: 'Trek',
        precio: 93000,
        imagen: './imgs/img1.jpg'    
}

let carrito = [];
const sunnyElement = document.getElementById("card1").addEventListener("click",() => sumarItem(sunny));
const proLadyElement = document.getElementById("card2").addEventListener("click",() => sumarItem(proLady));
const topmegaElement = document.getElementById("card3").addEventListener("click",() => sumarItem(topmega));
const specializedElement = document.getElementById("card4").addEventListener("click",() => sumarItem(specialized));
const trekElement = document.getElementById("card5").addEventListener("click",() => sumarItem(trek));
const sunnyImg = document.getElementById("card1").addEventListener("click", () => cambiarTexto("parrafo1")); 
const proLadyImg = document.getElementById("card2").addEventListener("click", () => cambiarTexto("parrafo2")); 
const topmegaImg = document.getElementById("card3").addEventListener("click", () => cambiarTexto("parrafo3")); 
const specializedImg = document.getElementById("card4").addEventListener("click", () => cambiarTexto("parrafo4")); 
const trekImg = document.getElementById("card5").addEventListener("click", () => cambiarTexto("parrafo5")); 
const btnElement = document.getElementById("pagarbtn").addEventListener("click",() => pagar());



function sumarItem(item) {
    carrito.push(item);
}

function cambiarTexto(a) {
    document.getElementById(a).innerHTML="<p>Comprado</p>";
}


let total = 0;

function pagar() {
    for(let i = 0;i < carrito.length ; i++){
        total += carrito[i].precio;
    }
    alert("El total a pagar es " + total);
    
}
const btnVaciar = document.getElementById('vaciar-carrito').addEventListener('click', () => vaciarCarro());
function vaciarCarro(){
        if(carrito.length == 0){
                alert("No tienes más bicicletas en el carrito para remover");
        }else{
                carrito.pop();
                alert(`Actualmente en el carrito hay ${carrito.length} bicicletas`)
        }
}
