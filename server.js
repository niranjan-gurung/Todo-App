const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT; 

// middleware
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});