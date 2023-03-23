import logo from './logo.svg';
import './App.css';
// Importar componentes
import CompShowBlogs from './blog/show';
import CompCreate from './blog/create';
import Compedit from './blog/edit';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='tabla'>
        <BrowserRouter>
{/*Rutas para la manipulacion de datos */}
     <Routes>
     <Route path='/' element={<CompShowBlogs />} />
     <Route path='/create' element={<CompCreate />} />
     <Route path='/edit/:id' element={<Compedit />} />
     </Routes>

      </BrowserRouter>
      </div>
      
    
    </div>
  );
}

export default App;
