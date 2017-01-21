// Se define las variables globales de Node
var http = require("http"),
	fs = require("fs");


// Se crea el servidor donde se procesara todo
// con los parametros de peticion y respuesta
http.createServer(function (req, res) {
// Se indexa el archivo que querramos utilizar
 var html = fs.readFile("index.html", function (err, html) {
	// Enviamos el contenido de nuestras vistas
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(html);
	res.end();
	
});

//Indicamos el puerto que el servidor va a escuchar
}).listen(8080);