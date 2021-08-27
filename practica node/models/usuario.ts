import { DataTypes } from 'sequelize/types';
import db from '../db/connection'


const Usuario = db.define('usuarios',{

    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.BOOLEAN
    }
});

export default Usuario;