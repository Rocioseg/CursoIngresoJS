function Mostrar()
{
	var a;
	a = document.getElementById("edad").value;
	if (a >= 18)
		{alert ("La persona es mayor de edad")}
	else if (a < 13)
		{alert ("La persona es un niño/niña")}
	else {alert ("La persona es adolescente")}
}//FIN DE LA FUNCIÓN