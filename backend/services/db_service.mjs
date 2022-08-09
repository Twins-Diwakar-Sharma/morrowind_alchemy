import Sequelize from 'sequelize'
import {Op} from 'sequelize'

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

async function getIngredientsFromEffect(effect){
    let ingredients = await Ingredient.findAll({
        include: {
            model: Effect,
        },
        where: {
            '$Effects.name$' : effect 
        }
   });

    return ingredients;
}

async function getIngredientsSubArray(ind,len){
    let ingredients = await Ingredient.findAll({
        where: {
            '$ingredients_id$' : {
                [Op.gte] : ind,
                [Op.lt] : ind+len-1
            } 
        }
   });

    return ingredients;
}

async function getEffectsFromIngredient(ingred){
    let effects = await Effect.findAll({
        include: {
            model: Ingredient,
        },
        where: {
            '$Ingredients.name$' : ingred 
        }
   });

    return effect;
}

async function getEffectsSubArray(ind,len){
    let effects = await Effect.findAll({
        where: {
            '$effects_id$' : {
                [Op.gte] : ind,
                [Op.lt] : ind+len-1
            } 
        }
   });

    return effects;
}


export {connect,syncDatabase,clearDatabase, getIngredientsFromEffect, getIngredientsSubArray, getEffectsFromIngredient, getEffectsSubArray};
