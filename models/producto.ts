import { DataTypes } from "sequelize";
import db from '../db/conecction'


// en los enpoint solo consumimos este modelo
//este se encargara el sanmiento de los query
//las insercciones seguras
//se encarga de crear todo por nosotros
const Producto = db.define('producto',{
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

export default Producto;