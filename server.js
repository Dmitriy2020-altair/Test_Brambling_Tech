const express = require('express');
const data = require('./data.json');

const PORT = 7777;

const app = express();

app.listen(PORT, () => console.log(`All good, server running well on port ${PORT}`));