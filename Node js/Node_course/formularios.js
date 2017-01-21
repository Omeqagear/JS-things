var http = require("http"),
	fs = require("fs"),
	parser = require("./param_parse.js");

var p = parser.parse



http.createServer(function (req, res) {

if (req.url.indexOf("favicon.ico") > 0) {return;}

 fs.readFile("index.html", function (err, html) {
 	var html_string = html.toString();
	var parametros = p(req);
 	var variables = html_string.match(/[^\{\}]+(?=\})/g﻿);
	var nombre = "Mundo";
	// Con esto vamos a confirmar si nos estan enviando parametros a la url
	
	


	for (var i = variables.length - 1; i >= 0; i--) {
		var variable = variables[i];

		html_string = html_string.replace("{"+variables[i]+"}", parametros[variable]);
 	
	}
	
    // Enviamos nuestras respuestas al servidor para que lo ejecute en la vista.
	res.writeHead(200,{"Content-Type": "text/html"});
	res.write(html_string);
	res.end();
	
});
     
     



}).listen(8080);