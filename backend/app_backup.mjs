import express from 'express'
import {Sequelize, DataTypes} from 'sequelize'

const sequelize = new Sequelize('morrowind', 'root', 'fortify_intelligence', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3500',
  host: 'database_service'
});




console.log('----%%%%%%%%%%%%%%--------------');

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

await User.sync();

const jane = User.build({firstName: "Jane", lastName: "Randi"});
await jane.save();

// express app
const expressApp = express();

expressApp.listen(3000);

expressApp.get('/', (req, res) => {
    console.log('listening get request for / at port 3000');
    res.send('<p> scorpion </p>');
});


