function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(isNaN(numero) ||  numero<0 || numero>9)
	{
		numero=prompt("reingrese un numero entre 0 y 9");
		numero=parseInt(numero);
	}

		alert("Bienvenido");


}//FIN DE LA FUNCIÓN