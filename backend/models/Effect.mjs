import {Sequelize,DataTypes} from 'sequelize'

const {Model} = Sequelize;


class Effect extends Model{
    static initialize(seq){
        Effect.init(
        {
            effects_id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                unique: true
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false 
            }
        },{
            sequelize: seq,
            modelName: 'Effect',
            tableName: 'Effects'
        });
    }
}


export {Effect};
