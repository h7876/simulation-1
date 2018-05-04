const express = require ('express');
const bodyParser = require('body-parser');
const Axios = require ('axios');
const controller = require ('./controller.js');
const massive = require ('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(dbInstance => app.set('db', dbInstance));

const port = 3005;
app.listen( port, () => { console.log(`STUFF IS HAPPENING! On ${port}`); } );

