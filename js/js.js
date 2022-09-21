var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var repe = document.getElementById("repe");
var s = getComputedStyle(pantalla);
var W, H, r,l;
var w = s.width;
var h = s.height;
var pokemon,pokeimagen;
var error = 0,  busqueda = 0;
let repetidas = [];
let palabra = [];
W = pantalla.width = w.split("px")[0];
H = pantalla.height = h.split("px")[0];
window.onload = iniciar();
function iniciar() {
  pincel.fillStyle = "white";
  pincel.fillRect(0, 0, pantalla.width, pantalla.height);
  pincel.font = "bold 35px sans-serif";
  pincel.fillStyle = "Black";
  pincel.fill();
  var t = 0.2,x = 0.25;
  var rnd = Math.floor(Math.random() * 150) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${rnd}`;
  fetch(url).then((res) => {
      if (res.status != "200") {
        console.log("Error no hay pokemones");
      } else {
        return res.json();
      }
  }).then((data) => {
      if (data) {
        pokemon = data.name;
        pokeimagen= data.sprites.front_default;
          t = 0.3;
          x = 0.35;
          for (var i = 0; i < data.name.length; i++) {
            pincel.lineWidth = 5;
            pincel.moveTo(W * t, H * 0.82);
            pincel.lineTo(W * x, H * 0.82);
            pincel.strokeStyle = "black";
            pincel.stroke();
            t = t + 0.06;
            x = x + 0.06;
          }
      }
    });
}
document.addEventListener(
  "keydown",
  (event) => {
    if (event.keyCode > 64 && event.keyCode < 91) {
        revisar(event.key);
    }
  },
  false
);

function verifica(palabra){
  if(palabra.length==pokemon.length){
    Swal.fire({
      title: "Felicidades",
      background: "white",
      text: "Adivinaste!!!! era: "+pokemon,
      imageUrl: pokeimagen,
      imageWidth: 250,
      imageHeight: 250,
      imageAlt: "Pokemon",
      showCancelButton: true,
      confirmButtonText: "Volver a Jugar",
      confirmButtonColor: "#00ff55",
      reverseButtons: false,
    }).then(function(isok){
        if(isok.isConfirmed){
          console.log("true");
          location.reload();
        }else{
          console.log("false");
          location.reload();
        }
      });;
  }
}
function revisar(letra){
  busqueda = 0;
    l=0;
  console.log(letra+"repetidas "+repetidas+"palabras "+palabra+"busqueda "+busqueda);
  if(!repetidas.includes(letra)){
    repe.innerHTML +=" "+letra;
      l = 0.313;
      for (var s = 0; s < pokemon.length; s++) {
        if (pokemon[s] == letra) {
          pincel.fillText(pokemon[s], W * l, H * 0.8);
          l = l + 0.06;
          repetidas.push(letra);
          palabra.push(letra);
          verifica(palabra)
        } else {
          l = l + 0.06;
          busqueda++;
        }
      }
      if (busqueda == pokemon.length) {
        error++;
        erradas(error);
        repetidas.push(letra);
      }
      l = 0.313;
  }
}
function base() {
  //base
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.2, H * 0.65);
  pincel.lineTo(W * 0.4, H * 0.65);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function mastil() {
  //mastil
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.3, H * 0.65);
  pincel.lineTo(W * 0.3, H * 0.1);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function apoyo() {
  //mastil apoyo
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.28, H * 0.1);
  pincel.lineTo(W * 0.65, H * 0.1);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function cuerda() {
  //cuerda
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.65, H * 0.09);
  pincel.lineTo(W * 0.65, H * 0.15);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function cabeza() {
  //cabeza
  pincel.moveTo(W * 0.65, H * 0.2);
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.arc(W * 0.65, H * 0.19, 30, 0, 2 * 3.14);
  pincel.stroke();
}
function cuerpo() {
  //cuerpo
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.65, H * 0.23);
  pincel.lineTo(W * 0.65, H * 0.45);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function brazoI() {
  //brazo izquierdo
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.65, H * 0.25);
  pincel.lineTo(W * 0.61, H * 0.35);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function brazoD() {
  //brazo derecho
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.65, H * 0.25);
  pincel.lineTo(W * 0.7, H * 0.35);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function piernaD() {
  //pierna derecha
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.65, H * 0.44);
  pincel.lineTo(W * 0.7, H * 0.55);
  pincel.strokeStyle = "black";
  pincel.stroke();
}
function piernaI() {
  //pierna izquierda
  pincel.lineWidth = 5;
  pincel.moveTo(W * 0.65, H * 0.44);
  pincel.lineTo(W * 0.6, H * 0.55);
  pincel.strokeStyle = "black";
  pincel.stroke();
  Swal.fire({
    title: "Perdiste :(",
    background: "white",
    text: "El pokemon era: "+pokemon,
    imageUrl: pokeimagen,
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: "Pokemon",
    showCancelButton: true,
    confirmButtonText: "Volver a Jugar",
    confirmButtonColor: "#00ff55",
    reverseButtons: false,
  }).then(function(isok){
      if(isok.isConfirmed){
        console.log("true");
        location.reload();
      }else{
        console.log("false");
        location.reload();
      }
    });;
}
function erradas(errar) {
  switch (errar) {
    case 1:
      base();
      break;
    case 2:
      mastil();
      break;
    case 3:
      apoyo();
      break;
    case 4:
      cuerda();
      break;
    case 5:
      cabeza();
      break;
    case 6:
      cuerpo();
      break;
    case 7:
      brazoI();
      break;
    case 8:
      brazoD();
      break;
    case 9:
      piernaD();
      break;
    case 10:
      piernaI();
      break;
  }
}

