function Mostrar()
{
	var a;
	a = document.getElementById("edad").value;
	a = parseInt (a); //convertir a numero si o si//
	if (a >= 18) // cerrar todas las llaves //
	{
	 alert ("La persona es mayor de edad");
    }
    else
    {
    	if (a < 13) // no poner punto y coma luego del if//
    	{
    		alert ("La persona es un niño/niña");
    	}
    	else
    	{
    		alert ("La persona es adolescente");
    	}
    }

}//FIN DE LA FUNCIÓN