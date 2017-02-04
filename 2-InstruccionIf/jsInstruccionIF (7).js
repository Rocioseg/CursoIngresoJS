function Mostrar()
{
	var a;
	var estado;
	a = document.getElementById("edad").value;
	a = parseInt (a);
	estado = document.getElementById("estadoCivil").value;
	if (a < 18 && !(estado == "Soltero"))
	{
		alert("Es muy joven para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN