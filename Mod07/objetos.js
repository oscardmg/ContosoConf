
"use strict";

(function() {

	var va = 'hola'

	var Gato = {};


	Gato.prototype = function(nombre, color, edad) {
		this.nombre = nombre;
		this.color = color;
		this.edad = edad;

		// de esta forma definimos el metod comer usando vinculacion externa
		this.comer = comerExterna; 

		// de la siguiente forma definimos elmetodo comer_2 en la funcion constructora
		this.comer_2 = function() {
			alert("El gato: " + this.nombre + " se comio 2 un raton");	
		}
	}




	function comerExterna() {
		alert("El gato: " + this.nombre + " se comio un raton");
	}


	// de la siguiente forma definimos el metodo comer_1 usando prototype
	Gato.prototype.comer_1 = function() {
		alert("El gato: " + this.nombre + " se comio 1 un raton");	
	}


	var Siames = Object.create(Gato);




	//var g = new Gato('gato','rojo',90);

	//alert("gato de color: " + g.color );

	//g.comer();
	//g.comer_1();
	//g.comer_2();



	
	
	var s = new Siames('siames','blanco',20);
	s.comer_2();



})();