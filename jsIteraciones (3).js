function Mostrar()
{
    var clave;
    var claveCorrecta;
    clave=prompt("ingrese clave:");
    claveCorrecta="utn750"

    while(clave !=claveCorrecta && clave !=null)
    {
        alert("clave incorrecta, ingrese de nuevo ")
        clave=prompt("ingrese clave")
    }
    
    alert("bienvenido");

}//FIN DE LA FUNCIÓN
