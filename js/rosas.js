let block = document.getElementsByClassName("block");
let carta = document.getElementById("sobre");


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

