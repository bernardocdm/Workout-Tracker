const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;
  
    res.status(401).json({ success: false, message: "Invalid credentials" });
  
});

module.exports = app;