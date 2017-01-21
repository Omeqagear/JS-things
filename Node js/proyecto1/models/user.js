const mongoose = require("mongoose");
const Schema = mongoose.Schema;


mongoose.connect("mongodb://localhost/curso_node");

var posibles_valores = ["M", "F"];
var email_math = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var password_validation = {
     validator:function (p) {
               return this.password_confimation == p;
            } ,
    message:"Las contraseñas no son iguales"
}

var user_schema = new Schema({
    name: String,
    last_name: String,
    username: {
        type: String,
        required: "El nombre de usuario es obligatorio",
        maxlenght: [50,"El Username es muy largo"]
    },
    password: {
        type: String,
        required: true,
        minlenght: [8,"Contraseña muy corta"],
        validate: password_validation
    },
    age: {
        type: Number,
        min:[5,"La edad no puede ser menor a 5"],
        max:[100,"La edad no puede ser mayor a 100"]
    },
    email: {
        type:String,
        required: "El correo es obligatorio",
        math: email_math
    },
    date_of_birth: Date,
    sex: {
        type: String,
        enum: {
            values: posibles_valores,
            message: "Opción no válida"
        }
    }
});

user_schema.virtual("password_confirmation")
    .get( ()=> {
        return this.p_c;
    })
    .set( (password)=> {
        this.p_c = password;
    });
    
var User = mongoose.model("User",user_schema);
module.exports.User = User;