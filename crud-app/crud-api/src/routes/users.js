const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

// Listar todos os usuários
router.get('/', auth, userController.getAllUsers);

// Editar um usuário específico
router.put('/:id', [
  auth,
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('role', 'Role is required').not().isEmpty(),
    check('password', 'Password must be at least 6 characters').optional().isLength({ min: 6 })
  ]
], userController.editUser);

// Criar um novo usuário
router.post('/', [
  auth,
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('role', 'Role is required').not().isEmpty(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
  ]
], userController.createUser);

// Excluir um usuário específico
router.delete('/:id', auth, userController.deleteUser);

// Trazer a quantidade de usuários separados por função
router.get('/count/by-role', auth, userController.getUsersCountByRole);

module.exports = router;
