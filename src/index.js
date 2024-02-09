const express = require('express');
const cors = require('cors'); //cross origin resource sharing. If the origin is not the same, accept it anyways
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.get('/sub/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.get('/mult/:n/:m', (req, res) => {
    res.json(Number(req.params.n) * Number(req.params.m));
});

app.get('/div/:n/:m', (req, res) => {
    if (res.json(Number(req.params.m)) == 0){
        console.log("Division by Zero Error");
    }
    else{
        res.json(Number(req.params.n) / Number(req.params.m));
    }
});
app.listen(port);