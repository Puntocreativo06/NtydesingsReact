
import './App.css'
import NavBar from './componentes/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetail from './componentes/products/Details'

function App() {

    return (    
    <div>
      <NavBar logo="img"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
      </Routes>
    </div>
        
  )
}

export default App


