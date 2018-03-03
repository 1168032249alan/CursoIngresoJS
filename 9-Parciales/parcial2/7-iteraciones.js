//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var i;
	var acumuladorNotas=0;
	var promedio;
	var minimo;
	var contadorVarones=0;
	var flag=0;

	for(i=0; i<6; i++)
	{
		nota=prompt("ingrese nota");
		nota=parseInt(nota);

		while(nota<0 || nota >10)
		{
			nota=prompt("reingrese la nota");
			nota=parseInt(nota);	
		}
		sexo=prompt("ingrese sexo ");
		while(sexo!= "femenino" && sexo!="masculino")
		{
			sexo=prompt("ingrese nuevamente el sexo");
		}
		acumuladorNotas=acumuladorNotas+nota;
		if(flag==0 || nota<minimo)
		{
			minimo=nota
			flag=1;
		}
		if(sexo=="masculino" && nota>6)
		{
			contadorVarones++;
		}
	}
	promedio=acumuladorNotas/i;
	alert("el promedio de las notas totales es : " + promedio + " la nota mas baja es : " + minimo + " y  la cantidad de varones con mayor nota a 6 son : " + contadorVarones);


}

