const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');

router.post(
  '/register',
  [
    check('name', 'Nome é obrigatório').not().isEmpty(),
    check('email', 'Por favor inclua um email válido').isEmail(),
    check('password', 'Por favor inclua uma senha com 6 ou mais caracteres').isLength({ min: 6 }),
    check('role', 'Função é obrigatória').not().isEmpty(),
  ],
  authController.register
);

router.post(
  '/login',
  [
    check('email', 'Por favor inclua um email válido').isEmail(),
    check('password', 'Senha é obrigatória').exists(),
  ],
  authController.login
);

module.exports = router;
