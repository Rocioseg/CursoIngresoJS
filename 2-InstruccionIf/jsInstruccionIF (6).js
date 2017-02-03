function Mostrar()
{
	var a;
	a = document.getElementById("edad").value;
	a = parseInt (a); //convertir a numero//
	if (a >= 18)
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