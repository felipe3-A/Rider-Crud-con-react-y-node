// importar la base de datos 3
import db from "../db/db.js";
// importar sequelize 4
import { DataTypes } from "sequelize";
// Definir una conexion 5
const model = db.define('blogs', {
    // Definir datos 6
    titulo: { type: DataTypes.STRING },
    contenido: { type: DataTypes.STRING },
})

// Exportar modelo (const=mame) 7
export default model