function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var maximo;
	var minimo;

	while(respuesta!='no')
	{
		
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(contador==1)							//algoritmo para sacar maximos y minimos
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if(numero>maximo)
		{
			maximo=numero;

		}if(numero<minimo)

			minimo=numero;
		}										//final del algoritmo de maximos y minimos
		contador++;
		respuesta=prompt("para salir,ingresar no");
	
	}




}//FIN DE LA FUNCIÓN