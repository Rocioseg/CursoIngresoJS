/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var a;
	var b;
	var result;
	a = document.getElementById("numeroUno").value;
	b = document.getElementById("numeroDos").value;
	a = parseInt(a);
	b = parseInt(b);
	result= a + b
	alert ("La suma es "+result);
}

