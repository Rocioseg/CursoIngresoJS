function Mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;
switch (mes){
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	{
		alert ("Ya paso el invierno!")
	}break;
	case "Julio":
	case "Agosto":
	{
		alert ("Abrigate que hace frio!")
	}break;
	default:
	{
		alert ("Falta para el invierno")
	}break;
}
}//FIN DE LA FUNCIÓN