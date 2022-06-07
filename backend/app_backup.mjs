import express from 'express'
import {Ingredient} from './models/Ingredient.mjs'
import Sequelize from 'sequelize'



const sequelize = new Sequelize('morrowind', 'root', 'fortify_intelligence', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3500',
    host: 'backend_service',
});



Ingredient.initialize(sequelize);

const Yo = Ingredient.build({name:'hackle-lo'});

const expressApp = express();


expressApp.listen(3000);

expressApp.get('/', (req, res) => {
    console.log('listening get request for / at port 3000');
    res.send('<p> scorpion </p>');
});


