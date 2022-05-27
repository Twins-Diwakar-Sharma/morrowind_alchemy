import express from 'express'
//import cors from 'cors'
//import bodyParser from 'body-parser'



const expressApp = express();

//expressApp.use(bodyParser.json());
//expressApp.use(cors())

expressApp.listen(3000);

expressApp.get('/', (req, res) => {
    console.log('listening get request for / at port 3000');
    res.send('<p> scorpion </p>');
});


