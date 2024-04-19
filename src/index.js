require('dotenv').config();
const express = require('express');
const cors = require('cors'); //cross origin resource sharing. If the origin is not the same, accept it anyways
const { add } = require("./arithmetica");
const app = express();
app.use(cors());

if(!process.env.PORT){
    throw new Error(`Please specify the port number for the HTTP server with the environment variable PORT.`);
}

const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Arithmetic service - last updated 3/4/2024');
});

app.get('/add/:n/:m', (req, res) => {
    const result = add(Number(req.params.n),  Number(req.params.m));
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