const express = require('express');
const app = express();
const port = process.env.port | 3000;
const bodyParser = require('body-parser');

app.get('*', (req, res)=>{
    res.json('Hello world!');
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port} !`);
})
