let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelector('p');
let body = document.querySelector('body');

let nombre = prompt('Ingrese su nombre');
if(nombre === "") {
    h2.innerHTML = "Invitado";
} else {
    h2.innerHTML = nombre;
}

h2.style.textTransform = "uppercase";

a.style.color = "#e51b3e";

let background = confirm("¿Desea colocar un fondo de pantalla?");
if(background === true) {
    body.className += " fondo"
}

for(i = 0; i < p.length; i++){
    if(p[i]%2 === 0){
        p[i].className = " destacadoPar";
    } else {
        p[i].className = " destacadoImpar";
    }
}

main.style.display = "block";