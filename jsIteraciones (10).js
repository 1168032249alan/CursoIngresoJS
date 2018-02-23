function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";	
	var positivo=0;
	var negativos=0;
	var contadorNegativos;
	var contadorPositivos;
	var acumuladorNegativos
	var acumuladorPositivos
	var contadorCeros=0;
	var contadorPares=0;
	var promediosNegativos;
	var promediosPositivos;
	var diferencia;

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("numero");
		numero=parseInt(numero);
		
		if(numero%2 == 0 && numero!=0)
		{
			contadorPares++;
		}
		if (numero<0)
		{
			acumuladorNegativos= acumuladorNegativos + numero;
			contadorNegativos++;	
		}else
		{
			if(numero>0)
		{
			acumuladorPositivos = acumuladorPositivos + numero;
			contadorPositivos++;
		}
		else
		{
			contadorCeros++;			
		}

		}	

		respuesta = prompt("quiere seguir");
	}
		promediosNegativos=acumuladorNegativos/contadorNegativos;
		promediosPositivos=acumuladorPositivos/contadorPositivos;
		diferencia = acumuladorPositivos - acumuladorNegativos;



		document.write("suma de negativos"	+ " " + acumuladorNegativos + " ");
		document.write("suma de positivos"  + " " + acumuladorPositivos + " ");
		document.write()



}//FIN DE LA FUNCIÓN