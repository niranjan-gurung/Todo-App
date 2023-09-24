const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasks');

const connectDB = require('./db/connect');
require('dotenv').config();

const DB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000; 

// middleware
app.use(express.static('public'));
app.use(express.json());

// router
app.use('/tasks', tasksRoute);

const start = async () => {
  try {
    await connectDB(DB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();