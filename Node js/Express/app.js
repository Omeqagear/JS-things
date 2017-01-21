
// Se cacha el framework de expres en una variable
var express = require("express");
// Se pone la ejecucion de la libreria en una variable llamada app
var app = express();

app.set("view engine", "pug");
// Se utiliza el metodo get o post dependiendo de nuestra entradaen la url para desplegar nuestra vista
app.get("/", function (req, res) {
    res.render("index" , {hola: "Hola Mundo...Saludos"});
});
// indicamos el puerto que escuchara la aplicacion una vez se levante el servidor.
app.listen(8080);
