'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const { start } = require('./src/server')
start(PORT);