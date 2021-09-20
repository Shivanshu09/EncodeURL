const express = require('express');

const app = express();
app.use(express.json());
const encodeURL = require('./encodeUrlRoute');

app.use('/generateKey', encodeURL);
app.listen(3000);



