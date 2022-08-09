import {getEffectsFromIngredient} from '../services/db_service.mjs'

const getEffectsFromIngredientController = async (req, res) => {
    let ingred = req.body.ingredient;
    console.log("recieved : " + ingred);
    let effects = await getIngredientsFromEffect(ingred); 
    console.log("pppppp"+effects);
    res.status(200).json(effects);
}
export { getEffectsFromIngredientController }
