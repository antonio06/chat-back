const express = require('express');
const app = express();
import { conversationList } from './mockData';

app.get('/', (_req, res) => {
  res.json(conversationList);
});

app.get('/yo', (_req, res) => {
  res.send('YO!');
});

app.get('/:userName', (req, res) => {
  const userName = req.params.userName;
  res.send(`Hello, ${userName}`);
});

const server = app.listen(3000, () => {
  console.log('Server running at http://localhost:' + server.address().port);
});
