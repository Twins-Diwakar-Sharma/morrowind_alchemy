import express from 'express'
import cors from 'cors'



const expressApp = express();
expressApp.use(cors({
    origin: "http://localhost:4000",
}));

expressApp.get('/', (req, res) => {
    console.log('listening get request for / at port 3000');
    res.send('<p> scorpion </p>');
});

expressApp.post('/getIngredients', (req, res) => {
    let msg = console.log(JSON.stringify(req.body));
    console.log('recieved at /query ' + msg);
    res.status(200).json({
        message: 'Response from server, samja kya rioutsu'
    });
});



expressApp.listen(3000);

