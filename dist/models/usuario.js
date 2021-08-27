"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../db/conecction"));
// en los enpoint solo consumimos este modelo
//este se encargara el sanmiento de los query
//las insercciones seguras
//se encarga de crear todo por nosotros
const Usuario = conecction_1.default.define('usuarios', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map