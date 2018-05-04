const express = require ('express');
const bodyParser = require('body-parser');
const Axios = require ('axios');
const controller = require ('./controller.js');
const massive = require ('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    dbInstance.seedFile()
    .then(res => console.log('Seed Successful!'))
    .catch(err => console.log('Seed Failed.', err))

    app.set('db', dbInstance);
}).catch(err => console.log(err));

app.get('/api/inventory/', (req, res) => {
    req.app.get('db').getInventory().then(inventory => {
        res.status(200).send(inventory)
    })
})

app.post('/api/product', (req, res)=> {
    let {item, price, photo} = req.body;
    req.app.get('db').addInventory([item, price, photo]).then(ok => {
        res.sendStatus(200);
    })
})

const port = 3005;
app.listen( port, () => { console.log(`STUFF IS HAPPENING! On ${port}`); } );

