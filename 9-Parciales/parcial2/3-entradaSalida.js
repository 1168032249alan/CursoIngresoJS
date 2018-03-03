//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var hilo;
	var perimetro;
	
	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);
	
	perimetro=ancho*2 + largo*2;

	hilo=perimetro*6;

	alert(" usted necesita " + hilo + " metros de alambre ");



}

