/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var a;
	a = document.getElementById("importe").value;
	a = parseInt(a);
	document.getElementById("resultado").value = a - (a * 0.25);
}
/*para restarle el porciento hay que poner la variable "a" adelante*/