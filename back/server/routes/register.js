const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./../models/usuario');
const app = express();
app.post('/register', function (req, res) {
  let body = req.body;
  let { username, email, password, securityQuestion, securityAnswer } = body;
  let usuario = new Usuario({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
    securityQuestion,
    securityAnswer
  });
  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      usuario: usuarioDB
    });
  })
});
module.exports = app;