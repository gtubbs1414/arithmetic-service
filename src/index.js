const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;


app.get('/', (req, res) => {
    // sends html
    res.send('Arithmetic Service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {

    res.json(Number(req.params.n) + Number(req.params.m));
});


app.listen(port);