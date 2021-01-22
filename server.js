const express = require('express');
const users = require('./data.json');

const PORT = 7777;

const app = express();

app.get('/api/users', (req, res) => {
	res.status(200).json(users);
});

app.listen(PORT, () => console.log(`All good, server running well on port ${PORT}`));