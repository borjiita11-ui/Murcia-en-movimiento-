/* =====================================
   MURCIA EN MOVIMIENTO
===================================== */

// Cambiar color del menú al hacer scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY>80){

        navbar.style.background="#08534d";
        navbar.style.padding="15px 60px";

    }

    else{

        navbar.style.background="#0f766e";
        navbar.style.padding="20px 60px";

    }

});


// Animación de aparición de las unidades

const unidades=document.querySelectorAll(".unidad");

const observador=new IntersectionObserver(function(entradas){

entradas.forEach(function(entrada){

if(entrada.isIntersecting){

entrada.target.style.opacity="1";

entrada.target.style.transform="translateY(0px)";

}

});

});

unidades.forEach(function(unidad){

unidad.style.opacity="0";

unidad.style.transform="translateY(60px)";

unidad.style.transition="all 0.8s ease";

observador.observe(unidad);

});
