let mensajes=[
    "🎮 Selecciona un proyecto para comenzar",
    "🚀 Cada proyecto representa un nuevo nivel",
    "💻 Programar también puede ser divertido",
    "⭐ HTML + CSS + JavaScript",
    "👾 PLAYER 1 READY"
];

let indice=0;

function cambiarMensaje(){
    let texto=document.getElementById("textoDinamico");
    texto.innerText=mensajes[indice];
    indice=indice+1;

    if(indice>=mensajes.length){
        indice=0;
    }
}

function cambiarMensajeFooter(){
    let mensaje=document.getElementById("mensajeFooter");

    let opciones=[
        "🎮 READY PLAYER ONE",
        "🚀 SIGUIENTE NIVEL: PROGRAMACIÓN",
        "⭐ CONTINÚA APRENDIENDO",
        "👾 GAME DEV MODE"
    ];

    let numero=Math.floor(Math.random()*opciones.length);
    mensaje.innerText=opciones[numero];
}

cambiarMensaje();

setInterval(cambiarMensaje,3000);
setInterval(cambiarMensajeFooter,5000);