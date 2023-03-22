// Importar librerias
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getdatos()
    }, [])
    // Mostrar todos los datos
    const getdatos = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }
    // Eliminar un dato
    const deletedato = async (id) => {
        axios.delete(`${URI}/${id}`)
        getdatos()
    }
    return (
        <div className='contenedor'>
            <div className='row'>
                <div className='col'>
                    <div className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                                <th>
                                    <link to={`/edit/${blog.id}`}className="btn btn-info">Editar</link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map ( (blog)=>(
                                <tr key={blog.id}>
                                    <th>{blog.titulo} </th>
                                    <th>{blog.contenido} </th>
                                </tr>
                            ))}
                        </tbody>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CompShowBlogs