let block = document.getElementsByClassName("block");
let carta = document.getElementById("sobre");
let boxImg = document.getElementsByClassName("box-img")[0];
let fuegosArtificiales = document.getElementsByClassName("fuegos-artificiales")[0];
let footerMensaje = document.getElementById("mensaje");
let texto = "Redactando su carta...";
let i = 0;
let speed = 75;

function obtenerNumeroAleatorio(max){
 return Math.floor(Math.random()*max);
}

function generate(){
    anime({
        targets : '.rosa',
        translateX : function(){
            return anime.random(-100,100);
        },
        translateY : function(){
            return anime.random(-100,100);
        },
        scale : function(){
            return anime.random(1,2);
        }
    })
}

function crearImagenes(rutaImagen){
    for(let i=0; i < 10; i++){
        let imagenRosa = document.createElement("img");
        imagenRosa.src=rutaImagen;
        imagenRosa.classList.add("rosa");
        block[0].appendChild(imagenRosa);
    }
}

function eliminarImagenes(className){
    let rosas = document.getElementsByClassName(className);
    if(rosas.length > 0){
        for(let i = rosas.length -1 ; i > -1; i--){
            rosas[i].parentNode.removeChild(rosas[i]);
        }
    }
}

carta.addEventListener(
    "mouseover",()=>{
        eliminarImagenes("rosa");
        crearImagenes("img/rosaNeon.png");
        generate();
    }
    
);

carta.addEventListener(
    "mouseout", ()=>{
        eliminarImagenes("rosa");
        crearImagenes("img/rosaNeon.png");
        generate();
        setTimeout(eliminarImagenes("rosa"),2000);
    }
);

function typeWriter(){
    if(i < texto.length){
        footerMensaje.innerHTML+= texto.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}
function redireccionarACarta(){
    if(!(i < texto.length)){
        location.href = "carta.html"
    }
    setTimeout(redireccionarACarta,20);
}

boxImg.addEventListener(
    "click",()=>{
        carta.style.display = "none";
        fuegosArtificiales.style.display = "block";
        footerMensaje.style.display = "block";
        setTimeout(typeWriter,speed);
        setTimeout(redireccionarACarta);
    }
);

