function Mostrar()
{
   var producto;
   var importeFinal;

   producto=prompt("ingrese el importe");
   producto=parseInt(producto);


   importeFinal=producto*1.21;

   

   document.getElementById("importeFinal").value=importeFinal
  
}
