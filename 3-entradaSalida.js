//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var hilo;

	largo=document.getElementById("largo").value;
	ancho=document.getElementById("ancho").value;

	largo=largo*2;
	ancho=ancho*2;

	perimetro=largo+ancho;
	hilo=perimetro*6;

	alert(" usted necesita " + hilo + " metros de hilo ");
}

