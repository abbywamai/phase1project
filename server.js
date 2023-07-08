const express = require('express');
const app = express();

const jsonData = require('./data.json');

app.get('/classics', (req, res) => {
  const classics = jsonData.classics;
  res.json(classics);
});

app.get('/mordern', (req, res) => {
  const mordern = jsonData.mordern;
  res.json(mordern);
});

app.get('/contemporary', (req, res) => {
  const contemporary = jsonData.contemporary;
  res.json(contemporary);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
