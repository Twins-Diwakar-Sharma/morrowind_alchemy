import express from 'express'
import {DataTypes,Sequelize} from 'sequelize'
import {Effect} from './models/Effect.mjs'


const james = Effect.build({name: "James"});

const expressApp = express();
expressApp.listen(3000);

expressApp.get('/', (req, res) => {
    console.log('listening get request for / at port 3000');
    res.send('<p> scorpion </p>');
});


