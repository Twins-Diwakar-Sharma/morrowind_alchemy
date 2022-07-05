import {getIngredients} from '../services/db_service.mjs'

const getIngredientsController = async (req, res) => {
    let effect = req.body.effect;
    console.log("recieved : " + effect);
    let ingredients = await getIngredients(effect); 
    console.log(ingredients);
    res.status(200).json(ingredients);
}

export { getIngredientsController }
