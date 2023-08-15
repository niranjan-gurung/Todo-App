const Task = require('../models/schema');

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}.` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = { 
  getAllTask,
  createTask,
  deleteTask
};