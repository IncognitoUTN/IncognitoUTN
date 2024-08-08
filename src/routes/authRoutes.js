// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth/authController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/formRegistro', authController.formRegistrar)

module.exports = router;
