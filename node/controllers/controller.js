// 9 Importar modelos
import model from '../models/model.js'

// Crear metodos para el crud 10

// Mostar registros
export const getdatos = async (req, res) => {
    try {
        const datos = await model.findAll()
        res.json(datos)
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Mostrar un registro
export const getdato = async (req, res) => {
    try {
        const dato = await model.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(dato[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Crear registro
export const postdato = async (req, res) => {
    try {
        await model.create(req.body)
        res.json({
            "message": "Nuevo registro"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Actualizar registro
export const putdato = async (req, res) => {
    try {
        await model.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "registro Actualizado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Eliminar registro
export const deletedato = async (req, res) => {
    try {
        await model.destroy({
            where: { id : req.params.id }
        })
        res.json({
            "message": "registro Eliminado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}