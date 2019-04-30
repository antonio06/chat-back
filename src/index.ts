const express = require('express');
const app = express();
import { conversationList } from './mockData';

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
