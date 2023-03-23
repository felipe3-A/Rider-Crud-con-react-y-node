// Crear nuevo usuario
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
const URI = 'http://localhost:8000/blogs/'
// Crear componente

const CompCreate = () => {
    const [titulo, settitulo] = useState('')
    const [contenido, setcontenido] = useState('')
    const navigate = useNavigate

    // Guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { titulo: titulo, contenido: contenido })
        navigate('/')
    }

    return (
        <div>
            <h3>Crear usuario</h3>
            <form onSubmit={store}>
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
                <button type='submit' className='btn btn-primary'>Enviar</button>
                <a  href='/' className='btn btn-danger'>Volver</a>
            </form>
        </div>
    )
}

export default CompCreate