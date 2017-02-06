function Mostrar()
{
	var numero;
	numero = Math.round (Math.random () * 10);
	if (numero >= 9)
		alert ("LA NOTA ES "+numero+" ,EXCELENTE")
	else if (numero >= 4)
		alert ("LA NOTA ES "+numero+" ,APROBO")
	else
		alert ("LA NOTA ES "+numero+" ,VAMOS, LA PROXIMA SE PUEDE");
}//FIN DE LA FUNCIÓN