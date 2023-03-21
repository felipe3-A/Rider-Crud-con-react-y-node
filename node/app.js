// Configurar aplicacion 15
import  express  from "express";
import cors from 'cors'
// Importar base de datos 16
import db from './db/db.js'
// Importar enrutador 17
import  router  from "./routes/routes.js";
// Utilizar servicios 18
const app=express()
// Usar app
app.use(cors())
app.use(express.json());
app.use('/blogs',router)

try {
    await db.authenticate()
    console.log('Conectado')
} catch (error) {
    console.log(`Error es ${error}`)
}

// app.get('/',(req,res)=>{
//     res.send('Hola mundo 3')
// })

// Crear puerto del servidor 19 
app.listen(8000,()=>{
    console.log('Servidor corriendo en http://localhost:8000/')
})

// DesInstalar e instalar 20 
// npm uninstall msql
// npm i mysql2