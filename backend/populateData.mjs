import {connect,syncDatabase,clearDatabase} from './services/db_service.mjs'
import {Effect} from './models/Effect.mjs'
import {Ingredient} from './models/Ingredient.mjs'


await connect();
await clearDatabase();

// ingredients
const AmpoulePod = await Ingredient.create({name:"Ampoule Pod"});
const HackleLoLeaf = await Ingredient.create({name:"Hackle-Lo Leaf"});

// effects
const DetectAnimal = await Effect.create({name:"Detect Animal"});
const WaterWalking = await Effect.create({name:"Water Walking"});
const Paralyse = await Effect.create({name:"Paralyse"});
const DrainWillpower = await Effect.create({name:"Drain Willpower"});
const RestoreFatigue = await Effect.create({name:"Restore Fatigue"});
const WaterBreathing = await Effect.create({name:"Water Breathing"});
const RestoreLuck = await Effect.create({name:"Restore Luck"});

await syncDatabase();

AmpoulePod.addEffect(DetectAnimal);
AmpoulePod.addEffect(WaterWalking);
AmpoulePod.addEffect(Paralyse);
AmpoulePod.addEffect(DrainWillpower);

HackleLoLeaf.addEffect(Paralyse);
HackleLoLeaf.addEffect(RestoreFatigue);
HackleLoLeaf.addEffect(WaterBreathing);
HackleLoLeaf.addEffect(RestoreLuck);

await syncDatabase();



