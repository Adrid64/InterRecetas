document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 15;
necesarios = 50;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 50) {
   	alert("Ganaste una participación en un sorteo de un kit de cocina");
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("No pudo ser, intentalo otra vez");
		tiempo = 15;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);