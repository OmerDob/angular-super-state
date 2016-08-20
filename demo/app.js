'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(serverConfig.port, 'localhost', () => {
    console.log(`Server started at http://${serverConfig.hostname}:${serverConfig.port}`);
});