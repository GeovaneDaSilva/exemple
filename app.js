//require('./environments/environemnt')

const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')


const app = express(); // INIT DECLARATION VAR AND CONST      
app.use(morgan('tiny'))

app.use(cors())

///////



app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
                  


//=====================================
// IMPORTS ROUTES                          
//=====================================

const timeRoutes = require('./routes/time');



app.use('/api', timeRoutes)
require('./database/config'); // IMPORT MONGODB



//=====================================
// SERVER LISTEN                         
//=====================================
app.listen(process.env.PORT, () => {
    console.log(`'Express server port: ${process.env.PORT} \x1b[32m%s\x1b[0m', 'online'`);
});

module.exports = app;          




