const express = require('express');

const router = express.Router();

const { 
  getAllTask, 
  createTask, 
  deleteTask 
} = require('../controllers/tasks');

router.route('/')
  .get(getAllTask)
  .post(createTask);

router.route('/:id')
  .delete(deleteTask);

module.exports = router;