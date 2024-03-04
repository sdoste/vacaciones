
function barcelona(){
    let fondo = document.querySelector("#fondo");
    let caption = document.querySelector("#placeName");

    fondo.style.backgroundImage = "url(/images/barcelona.jpeg)";
    caption.innerHTML = "¡Arrancamos! (Barcelona)";
}

function castelldefels(){
    let fondo = document.querySelector("#fondo");
    let caption = document.querySelector("#placeName");

    fondo.style.backgroundImage = "url(/images/castelldefels.jpg)";
    caption.innerHTML = "¡Ya vamos por la mitad! (Castelldefels)";
}

function vilanova(){
    let fondo = document.querySelector("#fondo");
    let caption = document.querySelector("#placeName");

    fondo.style.backgroundImage = "url(/images/vilanova.jpg)";
    caption.innerHTML = "¡Ya casi estamos! (Vilanova i la Geltrú)";
}

function tarragona(){
    let fondo = document.querySelector("#fondo");
    let caption = document.querySelector("#placeName");

    fondo.style.backgroundImage = "url(/images/tarragona.jpg)";
    caption.innerHTML = "¡Llegamos! Vivan las vacaciones! (Tarragona)";
    //cerrar
    document.querySelector("h3").innerHTML = "Cerrar(X)"
   }

function cerrar(){
    //vaciar
    document.querySelector("#container").innerHTML = "";
     //final background
     document.body.style.backgroundImage = "url(/images/playa.jpg)";
     document.body.style.backgroundPosition = "center";
     document.body.style.backgroundSize = "cover";
     document.body.style.backgroundRepeat = "no-repeat";
}    