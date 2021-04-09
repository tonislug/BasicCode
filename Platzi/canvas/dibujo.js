var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color; 
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick() 
{
	var lineas = parseInt(texto.value); /* value da el valor de una caja de texto */
	var l = 0;
	var yi, xf;
	var espacio = ancho / lineas;

	while(l < lineas) /* Hay 2 tipos de ciclos: while y for */
	{
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea("blue", 0, yi, xf, 300);
		console.log("Linea " + l);
		l++;
	}

	dibujarLinea("blue", 0, 1, 1, 300);
	dibujarLinea("blue", 1, 299, 299,299);
}
