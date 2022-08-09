import {getIngredientsFromEffect} from '../services/db_service.mjs'

const getIngredientsFromEffectController = async (req, res) => {
    let effect = req.body.effect;
    console.log("recieved : " + effect);
    let ingredients = await getIngredientsFromEffect(effect); 
    console.log("pppppp"+ingredients);
    res.status(200).json(ingredients);
}
export { getIngredientsFromEffectController }
