import axios from 'axios'
import { useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import '../App.css';
const URI='http://localhost:8000/blogs/'

const Compedit=()=>{
    const [titulo, settitulo] = useState('')
    const [contenido, setcontenido] = useState('')
    const navigate = useNavigate

    const {id}=useParams()

// Actualizar
 const update=async(e)=>{
    await axios.put(URI+id, {
        titulo: titulo,
        contenido: contenido,
    })
    navigate('/')
 }
 useEffect(()=>{
    getBlogId()
 },[])

 const getBlogId = async()=>{
    const res = await axios.get(URI+id)
    settitulo(res.data.titulo)
    setcontenido(res.data.contenido)
 }
 return(
    <div>
    <h3>Editar usuario</h3>
    <form onSubmit={update}>
        <div className='mb-3'>
            <label className='form-label'>Titulo</label>
            <input
                //    Valor
                value={titulo}
                onChange={(e) => settitulo(e.target.value)}
                type='text'
                className='form-control'
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Contenido</label>
            <textarea
                //    Valor
                value={contenido}
                onChange={(e) => setcontenido(e.target.value)}
                type='text'
                className='form-control'
            />
        </div>
        {/* Boton de enviar datos */}
        <button type='submit' className='btn btn-primary'>Actualizar</button>
        <a  href='/' className='btn btn-primary'><i class="fa-duotone fa-right-from-bracket"></i></a>
    </form>
</div>
 )
}
export default Compedit