const express = require("express");

const app = express();

app.set("view engine", "pug");
// Aqui definimos las rutas qu ese van a renderizar en el servidor con las peticiones Get||Post||Delete||Puts||etc
app.get("/", (req, res)=>{
    res.render("index");
});
// Siempre es bueno definir la rutas conlas que se renderizaran las vistas en "/nombre/form/..."
app.post("/",(req, res)=>{
    res.render("form");
});

app.listen(8080);

