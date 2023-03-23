// Importar librerias
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
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
       await axios.delete(`${URI}/${id}`)
        getdatos()
    }
    return (
        <div className='contenedor'>
            <div className='row'>
                <div className='col'>
                    <Link to='/create' className='btn btn-primary mt-2 mb-2'><i className='fas fa-plus'></i></Link><br />
                    <div className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                                <th>
                                    {/* <link to={`/edit/${blog.id}`}className="btn btn-info">Editar</link> */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map ((blog)=>(
                                <tr key={blog.id}>
                                    <td>{blog.titulo} </td>
                                    <td>{blog.contenido} </td>
                                    <td>
                                   
                                        <Link to={`/edit/${blog.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deletedato(blog.id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
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