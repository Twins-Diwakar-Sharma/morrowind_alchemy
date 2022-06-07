import express from 'express'


const expressApp = express();
expressApp.listen(3000);

expressApp.get('/', (req, res) => {
    console.log('listening get request for / at port 3000');
    res.send('<p> scorpion </p>');
});


