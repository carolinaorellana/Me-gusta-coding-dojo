/*Opcion con tres funciones distintas, esto fue lo que hice sin ayuda de lo visto en clase
/* estas son las tres funciones que hice al inicio:
var cantidadLikes1 = document.querySelector(".uno h5");
var cantidadLikes2 = document.querySelector(".dos h5");
var cantidadLikes3 = document.querySelector(".tres h5");

var contadorLikes1 = 9;
var contadorLikes2 = 12;
var contadorLikes3 = 9;

function agregarLike1(){
    contadorLikes1++;
    cantidadLikes1.innerHTML= contadorLikes1 +" like(s)";
}

function agregarLike2(){
    contadorLikes2++;
    cantidadLikes2.innerHTML= contadorLikes2 +" like(s)";
}

function agregarLike3(){
    contadorLikes3++;
    cantidadLikes3.innerHTML= contadorLikes3 +" like(s)";
}
*/


/* Al la funcion del html se le puede garegar un numero para diferenciar, aca de crea el lemento numero.  que lo representa en este caso, asi saber donde se realizo el click*/
/*
Así se hace un llamdo al indice de la variable, y no crear una variable para cada una. se usa en el [0], [1], [2].*/
/*

var cantidadLike = document.querySelectorAll(".infoArticle h5");
console.log(cantidadLike);

var contadorLikes1 = 9;
var contadorLikes2 = 12;
var contadorLikes3 = 9;

function agregarLike(numero){
    if (numero == 1){
        contadorLikes1++;
        cantidadLike[0].innerHTML= contadorLikes1 +" like(s)";
    } else if (numero == 2){
        contadorLikes2++;
        cantidadLike[1].innerHTML= contadorLikes2 +" like(s)";
    }
    else {
        contadorLikes3++;
        cantidadLike[2].innerHTML= contadorLikes3 +" like(s)";
    }
}
*/

/*Aca de va a editar del la cantidad de likes original de html, no hacer variables con contador */
/*Se tuvo que agregar la etiqueta span, para separar el numero que va a aumentar del texto likes (s) */
var cantidadLike = document.querySelectorAll(".infoArticle h5 span");

console.log(cantidadLike);

function agregarLike(numero){
    if (numero == 1){
        cantidadLike[0].innerHTML++;
    } else if (numero == 2){
        cantidadLike[1].innerHTML++;
    }
    else {
        cantidadLike[2].innerHTML++;
    }
}
