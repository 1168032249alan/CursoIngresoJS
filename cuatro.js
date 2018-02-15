function Mostrar()
{
    var num1;
    var num2;
    var resultado;

    num1=prompt("ingrese un numero");
    num2=prompt("ingrese otro numero");

    num1=parseInt(num1);
    num2=parseInt(num2);
    
    if(num1==num2){
        resultado=num1*num2
        document.write(resultado);
    }
    else if(num1>num2){
        resultado=num1-num2
        document.write(resultado);
    }
    else{
        resultado=num1+num2
        document.write(resultado);

    }

    

}
