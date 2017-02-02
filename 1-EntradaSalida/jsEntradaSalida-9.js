/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var a;
	a = document.getElementById("sueldo").value;
	a = parseInt(a);
	document.getElementById("resultado").value = (a * 0.1) + a;
}
/*Se puede hacer: si sumas el porcentaje al sueldo, la variable2 igual a la variable1 por 1.10*/