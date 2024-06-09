const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const taskController = require('../controllers/taskController');

// Listar todas as tarefas do usuário logado
router.get('/', auth, taskController.getTasksByUser);

// Editar uma tarefa específica do usuário logado
router.put('/:id', [
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').optional()
  ]
], taskController.editTask);

// Criar uma nova tarefa
router.post('/', [
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').optional()
  ]
], taskController.createTask);

// Excluir uma tarefa específica do usuário logado
router.delete('/:id', auth, taskController.deleteTask);

// Trazer as tarefas que não possuem um dono
router.get('/unassigned', auth, taskController.getUnassignedTasks);

// Adicionar um dono a uma tarefa específica
router.put('/assign/:id', [
  auth,
  [
    check('ownerId', 'Owner ID is required').not().isEmpty()
  ]
], taskController.assignTaskOwner);

module.exports = router;
