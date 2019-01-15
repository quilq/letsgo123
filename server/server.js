require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT;
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const api = require('./routes/api');

app.use(helmet());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Output folder
const publicPath = path.join(__dirname, './../dist/letsgo123');
app.use(express.static(publicPath));

app.use('/api', api);

//Send all other routes (define last):
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../dist/letsgo123/index.html'));
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port} !`);
})
