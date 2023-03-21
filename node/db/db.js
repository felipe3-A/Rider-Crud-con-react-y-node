// Conexion de base de dtos paso:1

import {Sequelize}from 'sequelize'

// Importar base de de datos 2
const db = new Sequelize('crud','root','',{
    host: 'localhost',
    dialect:'mysql'
})

export default db