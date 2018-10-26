require('./config/config');

const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port} !`);
})
