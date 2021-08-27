import {Sequelize} from 'sequelize'


const db = new Sequelize('node','root','12345',{
    host: 'localhost',
    dialect: 'mariadb'
})

export default db;