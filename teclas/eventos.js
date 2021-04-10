var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("blue", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color; 
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)
{
	var colorcito = "blue";
	var movimiento = 10;
	switch(evento.keyCode)
	{
		case teclas.UP:
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
			console.log("Vamos parriba");
		break;
				
		case teclas.DOWN:
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
			console.log("Vamos pabajo");
		break;
				
		case teclas.LEFT:
			dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
			console.log("Vamos paunlao");
		break;
				
		case teclas.RIGHT:
			dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
			console.log("Vamos palotro");
		break;
			
		default:
			console.log("No toques eso");
		break;
	}
}
