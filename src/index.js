const express = require('express');
const cors = require('cors'); //cross origin resource sharing. If the origin is not the same, accept it anyways
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    const result = sum(Number(req.params.n),  Number(req.params.m));
    res.json({ result });
});

app.get('/sub/:n/:m', (req, res) => {
    const result = Number(req.params.n) - Number(req.params.m);
    res.json({ result });
});

app.get('/mult/:n/:m', (req, res) => {
    const result = Number(req.params.n) * Number(req.params.m);
    res.json({ result });
});

app.get('/div/:n/:m', (req, res) => {
    const n = Number(req.params.n);
    const m = Number(req.params.m);
    if (m == 0){
        res.status(400).json({error: "Division by zero error"});
    }else{
        const result = n / m
        res.json({result});
    }
});
app.listen(port);