const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO WORL');
});

module.exports = app;