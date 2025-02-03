const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} no es un role válido'
}
let Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: {
      type: String,
      required: [true, 'El nombre de usuario es necesario'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'El correo es necesario'],
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
    },
    securityQuestion: {
      type: String,
      required: [true, 'La pregunta de seguridad es obligatoria'],
    },
    securityAnswer: {
      type: String,
      required: [true, 'La respuesta de seguridad es obligatoria'],
    },
  });
  

// elimina la key password del objeto que retorna al momento de crear un usuario
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
 }

 usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('Usuario', usuarioSchema)