//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//6-Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas (validar que sea mayor a 0,”cero”)
	// de los 7 días de la semana por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor importe de venta

	var importe;
	var contador=0;
	var maximoImporte;
	var minimoImporte;
	
	while(contador<7)
	{
		importe=prompt("ingrese el importe");
		importe=parseFloat(importe);

		while(importe<=0)
		{ 
			importe=prompt("ingrese el importe nuevamente");
			importe=parseFloat(importe);
		}
			if(contador==0)
		{
			maximoImporte=importe;
			minimoImporte=importe;
		}else
		{
			if(importe<minimoImporte)
			{
				minimoImporte=importe;

			}
			if(importe>maximoImporte)
			{
				maximoImporte=importe;
			}
		}
		contador++;
	}

	alert("el maximo Importe es : " + maximoImporte + " y el minimo Importe  es: " + minimoImporte);
}



