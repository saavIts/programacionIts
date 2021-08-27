"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'root', '12345', {
    host: 'localhost',
    dialect: 'mariadb'
});
exports.default = db;
//# sourceMappingURL=conecction.js.map