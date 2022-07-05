import express from 'express'
import cors from 'cors'
import {router} from './routes/router.mjs'
import {connect} from './services/db_service.mjs'



const expressApp = express();
expressApp.use(cors({
    origin: "http://localhost:4000",
}));


connect();


expressApp.use(express.json());
expressApp.use('/', router);

expressApp.listen(3000);

