import {Sequelize,DataTypes} from 'sequelize'

const {Model} = Sequelize;


class Ingredient extends Model{
    static initialize(seq){
        Ingredient.init({
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false 
            }
        },{
            sequelize: seq,
            modelName: 'Ingredient',
            tableName: 'Ingredients'
        });
    }
}


export {Ingredient};
