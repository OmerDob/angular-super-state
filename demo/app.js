'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '..', 'bin')));

app.listen(3000, 'localhost', () => {
    console.log(`Server started at http://localhost:3000`);
});