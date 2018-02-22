function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(true)
	{
		
		numero=prompt("numero");
		if(numero==null)
		{
			break;
		}
		contador++;
		numero=parseInt(numero);
		if(isNaN(numero));
		{
			break;
		}		
		acumulador=acumulador+numero
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN