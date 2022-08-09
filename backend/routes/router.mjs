import express from 'express'

import {getIngredientsFromEffectController} from '../controllers/getIngredientsFromEffectController.mjs'
import {getIngredientsSubArrayController} from '../controllers/getIngredientsSubArrayController.mjs'
import {getEffectsFromIngredientController} from '../controllers/getEffectsFromIngredientController.mjs'
import {getEffectsSubArrayController} from '../controllers/getEffectsSubArrayController.mjs'
const router = express.Router();

router.post('/getIngredientsFromEffect', getIngredientsFromEffectController);
router.post('/getIngredientsSubArray', getIngredientsSubArrayController);
router.post('/getEffectsFromIngredient', getEffectsFromIngredientController);
router.post('/getEffectsSubArray', getEffectsSubArrayController);

export {router};
