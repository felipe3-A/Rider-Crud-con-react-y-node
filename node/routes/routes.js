// Configurar rotes 11
import express from 'express'
import { getdato,getdatos,postdato,putdato,deletedato } from '../controllers/controller.js'
const router = express.Router()
// Importar metodos del crud 13
router.get('/',getdatos)
router.get('/:id',getdato)
router.post('/',postdato)
router.put('/:id',putdato)
router.delete('/:id',deletedato)
// Exportar enrutador 14

export default router