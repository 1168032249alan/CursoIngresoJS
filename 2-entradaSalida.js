//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var producto;
	var importeFinal;

	producto=prompt("ingrese numero");
	producto=parseInt(producto)
	
	importeFinal=producto*1.21;

	document.getElementById("importe").value=importeFinal;
}

