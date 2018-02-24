function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(numero<1 || numero>10)
		{
			numero=prompt("reingrese un numero");
			numero=parseInt(numero);
		}
			acumulador=acumulador + numero;
		
			respuesta=prompt("desea ingresar otro numero? si/no" );
	}
		

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN