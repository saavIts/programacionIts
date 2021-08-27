import { DataTypes } from "sequelize";
import db from '../db/conecction'


// en los enpoint solo consumimos este modelo
//este se encargara el sanamiento de las query
//las insercciones seguras
//se encarga de crear todo por nosotros
const Usuario = db.define('usuarios',{
    nombre: {
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