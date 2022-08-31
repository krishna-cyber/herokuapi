const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const apidata = require('./data.json');

app.use(cors());
app.get('', (req, res) => res.send('Hello I am on the developing journey!'));
app.get('/api/data', (req, res) => res.send(apidata));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));