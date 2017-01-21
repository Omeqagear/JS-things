var http = require("http"),
	fs = require("fs");



http.createServer(function (req, res) {

 fs.readFile("index.html", function (err, html) {
 	var html_string = html.toString();

 	// Definimos las expresiones regulares que buscara las variables en la vista
 	var variables = html_string.match(/[^\{\}]+(?=\})/g﻿);
	// Definimos dichas variables que colocaremos en la vista
	var nombre = "Samir";
     
     //Mediante el ciclo for iteramos en el arreglo formado por las variables para targetearlas en la 
     //vista y sustituirla por su valor
	for (var i = variables.length - 1; i >= 0; i--) {
		var value = eval(variables[i]);

		html_string = html_string.replace("{"+variables[i]+"}", value);
	}
    // Enviamos nuestras respuestas al servidor para que lo ejecute en la vista.
	res.writeHead(200,{"Content-Type": "text/html"});
	res.write(html_string);
	res.end();
	
});


}).listen(8080);