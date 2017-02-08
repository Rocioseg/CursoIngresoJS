/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	precioUno = document.getElementById("PrecioUno").value;
	precioUno = parseInt (precioUno);
	precioDos = document.getElementById("PrecioDos").value;
	precioDos = parseInt (precioDos);
	precioTres = document.getElementById("PrecioTres").value;
	precioTres = parseInt (precioTres);
	resultado = (precioUno + precioDos + precioTres)
	alert ("La suma es "+resultado);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	precioUno = document.getElementById("PrecioUno").value;
	precioUno = parseInt (precioUno);
	precioDos = document.getElementById("PrecioDos").value;
	precioDos = parseInt (precioDos);
	precioTres = document.getElementById("PrecioTres").value;
	precioTres = parseInt (precioTres);
	resultado = ((precioUno + precioDos + precioTres) / 3);
	alert ("El promedio es "+resultado);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var resultadoIva;
	precioUno = document.getElementById("PrecioUno").value;
	precioUno = parseInt (precioUno);
	precioDos = document.getElementById("PrecioDos").value;
	precioDos = parseInt (precioDos);
	precioTres = document.getElementById("PrecioTres").value;
	precioTres = parseInt (precioTres);
	resultado = (precioUno + precioDos + precioTres);
	resultadoIva = ((resultado * 0.21) + resultado); // o resultado * 1.21 para ya sumarle el porcentaje//
	alert ("El precio final es "+resultadoIva);
}