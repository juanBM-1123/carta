let contenidoCarta = document.getElementById("contenidoCarta");
let speed = 50;
let i = 0;
let texto = `
El estilo de mi aprecio por ti sera expresado por un estilo de escritura del tipo:'Di lo que quieras decir.
Dilo con sencillez.Dilo directamente. Dilo desde el fondo de tu corazón y resiste la tentación de escribir con exceso.'
Anhelo que sepas que te valoro por muchas razones. Durante el transcurso de estos 5 años he descubierto que eres una mujer con un corazón de oro,
tienes un corazón realmente tierno, aunque a veces he visto como tus pensamientos te confunden, siempre he deseado que esa ternura en ti no se termine. 
Eso hizo que empezara a sentir un sentimiento por ti que jamás pensé que llegaría a sentir
e incluso has inspirado mis más grandes deseos profesionales, convertirme en un líder, eso 
y muchas cosas más quisiera decirte, pero no deseo aburrirte, así que, para finalizar, quisiera compartir dos frases contigo:
Este es mi deseo hacia ti:
"Nunca te haré daño, siempre te ayudaré. Si tienes hambre, te daré mi comida. Si tienes miedo, seré tu amigo. Te amo ahora y el amor nunca termina"
Y este es una recomendación de mi parte:
"Debemos combinar la dureza de la serpiente con la suavidad de la paloma, una mente dura con un corazón tierno (Martin Luther King, Jr.)"
`;

function typeWriter(){
    if(i < texto.length){
        contenidoCarta.innerHTML+= texto.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

typeWriter();
contenidoCarta.addEventListener(
    "click",()=>{
        location.href = 'index.html';
    }
);