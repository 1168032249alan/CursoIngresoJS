//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var producto;
	var importeFinal;

	producto=prompt("ingrese el importe");
	producto=parseFloat(producto);

	importeFinal=producto*1.21;

	alert("su importe final es : " + importeFinal);

		
}

