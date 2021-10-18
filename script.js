let boton = document.getElementById("icono");
let menu = document.getElementById("nav");
let contador = 0;
boton.addEventListener("click",function(e){
    e.preventDefault();
    if(contador == 0){
        menu.className = ("nav dos")
        contador=1;
    }else{
        menu.classList.remove("dos")
        menu.className = ("nav uno")
        contador = 0
    }
})