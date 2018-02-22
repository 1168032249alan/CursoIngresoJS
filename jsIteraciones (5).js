function Mostrar()
{

    var sexo; 
    sexo = prompt("ingrese f ó m .");

    while((sexo!=`f`&& sexo !="m") && sexo !=null)
    {
        if(sexo==null)
        {
            break

        }
        sexo=prompt("intente nuevamente");       
    }



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN