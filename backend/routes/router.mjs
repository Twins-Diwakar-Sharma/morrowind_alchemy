import express from 'express'

import {getIngredientsController} from '../controllers/getIngredientsController.mjs'

const router = express.Router();

router.post('/getIngredients', getIngredientsController);


export {router};
