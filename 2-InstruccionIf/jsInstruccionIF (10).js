function Mostrar()
{
	var numero;
	numero = parseInt (Math.random() * (11 - 1) + 1);
	if (numero >= 9)
		alert ("LA NOTA ES "+numero+" ,EXCELENTE")
	else 
	{	
		if (numero >= 4)
		{
			alert ("LA NOTA ES "+numero+" ,APROBO")
		}
		else
		{
			alert ("LA NOTA ES "+numero+" ,VAMOS, LA PROXIMA SE PUEDE");
		}
	}
}//FIN DE LA FUNCIÓN