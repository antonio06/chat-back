const express = require('express');
const app = express();

const conversationList = [
	{
		id: 1,
		name: 'Micke',
		message: 'Hii, everyone!!!'
	},
	{
		id: 2,
		name: 'John',
		message: 'Hii Micke, How are you ?. I`m fine'
	},
	{
		id: 3,
		name: 'Saara',
		message: 'Hello, mm guys, when do we meet ?'
	},
	{
		id: 4,
		name: 'Jennifer',
		message: 'Hello Saara, for me this Friday its well.'
	},
]

app.get('/', (req, res) => {
	res.json(conversationList);
});

app.get('/yo', (req, res) => {
	res.send('YO!');
});

app.get('/:userName', (req, res) => {
	const userName = req.params.userName;
	res.send(`Hello, ${userName}`);
});

const server = app.listen(3000, () => {
	console.log('Server running at http://localhost:' + server.address().port);
});
