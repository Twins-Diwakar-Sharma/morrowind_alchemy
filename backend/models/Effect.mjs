import Sequelize from 'sequelize'

const {Model} = Sequelize;

class Effect extends Model{
   
    static initialize(seq){
       Effect.init(
           {
               id: {
                    type: Datatypes.INTEGER,
                    autoIncreament: true,
                    primaryKey: true
                },
               name: {
                    type: Datatypes.STRING,
                    allowNull: false
               }
            },
           {
              sequelize: seq,
              modelName: "Effect"
            }
       ); 

    }

}

export {Effect};
