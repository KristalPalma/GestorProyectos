const express = require('express');
const bcrypt = require('bcryptjs'); // Para encriptar las contraseñas
const User = require('../models/User'); // Asegúrate de tener un modelo de usuario
const router = express.Router();

// Ruta POST para registrar usuario
router.post('/register', async (req, res) => {
  const { username, email, password, securityQuestion, securityAnswer } = req.body;

  // Validar campos
  if (!username || !email || !password || !securityQuestion || !securityAnswer) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    // Verificar si el email ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      securityQuestion,
      securityAnswer,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();

    return res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Hubo un error al crear el usuario' });
  }
});

module.exports = router;
