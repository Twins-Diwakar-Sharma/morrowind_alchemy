import {connect,syncDatabase,clearDatabase} from './services/db_service.mjs'
import {Effect} from './models/Effect.mjs'
import {Ingredient} from './models/Ingredient.mjs'


await connect();
await clearDatabase();

const AmpoulePod = await Ingredient.create({name:"Ampoule Pod"});
const DetectAnimal = await Effect.create({name:"Detect Animal"});
const WaterWalking = await Effect.create({name:"Water Walking"});
const Paralyse = await Effect.create({name:"Paralyse"});
const DrainWillpower = await Effect.create({name:"Drain Willpower"});

await syncDatabase();

AmpoulePod.addEffect(DetectAnimal);
AmpoulePod.addEffect(WaterWalking);
AmpoulePod.addEffect(Paralyse);
AmpoulePod.addEffect(DrainWillpower);


await syncDatabase();



