const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user").User;
const session = require("express-session");
const router_app = require("./routes/route_app");
const session_middleware = require("./middlewares/session");
const app = express();

app.use("/static",express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(session({
    secret: "raidsoft123456789",
    resave: false,
    saveUninitialized: false
}));
app.use("/app",session_middleware);
app.use("/app",router_app);

app.set("view engine","pug");

app.get("/", (req,res)=> {
    console.log(req.session.user_id);
    res.render("index");
});
app.get("/singup", (req,res)=> {
    User.find( (err,doc)=> {
        res.render("singup");
        console.log(doc);
    });
});
app.get("/login", (req,res)=> {
    res.render("login");
});
app.post("/sessions", (req,res)=> {
    User.findOne(
        {
            email:req.body.email,
            password:req.body.password
        },
         (err,user)=> {
            console.log(user);
            req.session.user_id = user._id;
            res.redirect("/app");
        }
    )
});
app.post("/singnup", (req,res)=> {
    var user = new User({
        name:req.body.name,
        last_name:req.body.lastname,
        age:req.body.age,
        date_of_birth:req.body.date,
        sex:req.body.sex,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        password_confirmation:req.body.password_confirmation
    });
    user.save(function (err) {
        if(err){
            res.send(String(err));
        }else{
            res.send("Guardamos sus datos con éxito");
        }
    });
})

app.listen(8080, ()=>{
    console.log("The server is running in the port 8080");
});


