// Configurar rotes 11
import express from 'express'
import { getdato, getdatos, postdato, Putdato,deletedato } from '../controllers/controller.js'
const router = express.Router()
// Importar metodos del crud 13
router.get('/',getdatos)
router.get('/:id',getdato)
router.post('/,',postdato)
router.put('/',Putdato)
router.delete('/',deletedato)
// Exportar enrutador 14

export default router