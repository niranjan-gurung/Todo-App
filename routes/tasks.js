const express = require('express');

const router = express.Router();

const { getAllTask, createTask } = require('../controllers/tasks');

router.route('/')
  .get(getAllTask)
  .post(createTask);

module.exports = router;