function Mostrar()
{
//tomo la edad  
    var mesDelAño;
    mesDelAño= document.getElementById('mes').value;

    
    switch(mesDelAño)
    {
        case"Julio":
        case"Agosto":
            alert("Abrigate que hace frio");

            break;

        case"Enero":
        case"Febrero":
        case"Marzo":
        case"Abril":
        case"Mayo":
        case"Junio":
            alert("Falta poco para el invierno");

            break;
         
        case"Septiembre":
        case"Octubre":
        case"Noviembre":
        case"Diciembre":
            alert("Ya paso el frio, ahora el calor ");

            break;    


    }

    
    





}//FIN DE LA FUNCIÓN