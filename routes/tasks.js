const express = require('express');

const router = express.Router();

const { 
  getAllTask,
  getTask, 
  createTask, 
  deleteTask,
  updateTask
} = require('../controllers/tasks');

router.route('/')
  .get(getAllTask)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .delete(deleteTask)
  .patch(updateTask);

module.exports = router;