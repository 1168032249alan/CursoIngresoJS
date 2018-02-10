function Mostrar()
{
    var largo;
    var ancho;
    var superficie;
    var hilo;


    largo=document.getElementById("alrgo").value;
    ancho=document.getElementById("ancho").value;

    superficie=largo*2 + ancho*2;
    hilo= superficie*3;

    alert(hilo);



}
