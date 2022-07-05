import Sequelize from 'sequelize'

import {Effect} from '../models/Effect.mjs'
import {Ingredient} from '../models/Ingredient.mjs'

let sequelize;

async function connect(){
    sequelize = new Sequelize('Morrowind','Nerevarine', 'Levitate',{
        dialect: 'mysql',
        port:3500,
        host:'database_service'
    });

    let retries = 10;
    while(retries) {
        try{
            await sequelize.authenticate();
            console.log('connected to database');
            break;
        }catch(err){
            console.error('unable to connect', err);
            retries -= 1;
            console.log(`retries left : ${retries}`);
            await new Promise(res => setTimeout(res, 5000));
        }
    }

    Effect.initialize(sequelize);
    Ingredient.initialize(sequelize);
    
    Effect.belongsToMany(Ingredient,{
        through:'Connect_Effect_Ingredient',
        foreignKey:'effects_id',
    });
    Ingredient.belongsToMany(Effect,{
        through:'Connect_Effect_Ingredient',
        foreignKey:'ingredients_id',
    });

    await sequelize.sync();
}

async function syncDatabase(){
    await sequelize.sync();
}

async function clearDatabase(){
    await sequelize.sync({force:true});
}

async function getIngredients(effect){
    const ingredients = await Ingredient.findAll({
        include: {
            model: Effect,
        },
        where: {
            '$Effects.name$' : effect 
        }
   });

    return ingredients;
}

export {connect,syncDatabase,clearDatabase, getIngredients};
