function Mostrar()
{
    var edad;
    var estadoCivil;

    edad=document.getElementById("edad").value;
    estadoCivil=document.getElementById("estadoCivil").value;

    if(edad<=18 && estadoCivil!="soltero"){
        alert("usted es muy pequeño para NO ser soltero");
    }
//tomo la edad  

	


}//FIN DE LA FUNCIÓN