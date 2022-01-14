const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.get('/test', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
  

app.listen(6000, () => console.log('API is running on http://localhost:6000/login'));
 