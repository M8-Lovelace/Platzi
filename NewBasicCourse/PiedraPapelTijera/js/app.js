function aleatorio(min,max){
  return Math.floor(Math.random() * (max - min+1)) + min;
}

function eleccion(jugada){
  let resultado = ""
  if(jugada == 1){
      resultado = " 🥌."
  } else if(jugada == 2){
      resultado = " 🧻."
  } else if(jugada == 3){
      resultado = " ✂."
  } else{
      resultado = "MAL ELEGIDO..."
  }
  return resultado;
}

//1 es piedra, 2 es papel, 3 es tijera
let jugador=0
let pc= 0
let triunfos=0
let perdidas=0

while(triunfos<3 && perdidas<3){
  pc=aleatorio(1,3)
  jugador=prompt("Elije: \n1 = piedra \n2 = papel\n3 = tijera")

  alert("Pc elige: " + eleccion(pc))
  alert("Tu eliges: " + eleccion(jugador))

  //Combate
  if(pc==jugador){
      alert("EMPATE")
  } else if((jugador==1 && pc==3) ||(jugador==2 && pc==1) || jugador==3 && pc==2){
      alert("GANASTE")
      triunfos+=1
  } else{
      alert("PERDISTE")
      perdidas+=1
  }
}
if (triunfos>perdidas){
  alert("¡LE GANASTE A LA PC!\nGanaste "+ triunfos+ " veces. Perdiste "+perdidas+ " veces.")
} else{
  alert("PERDISTE CONTRA LA PC...\nGanaste "+ triunfos+ " veces. Perdiste "+perdidas+ " veces.")
}
