function Mostrar()
{

    var sexo; 
    sexo= prompt("ingrese f ó m .");

    while(sexo != "f" && sexo!="m" )
    {
        sexo=prompt("ingrese su sexo plis");
    }
        
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN