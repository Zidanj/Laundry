
import './App.css'
import Homepage from './pages/Homepage'
import ProductList from './pages/Product'
import ClientList from './pages/Client'
import Detailed from './pages/Detailed'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route element = {<Homepage/>} path = "/home" />
      <Route element = {<ProductList/>} path = "/product-list" />
      <Route element = {<ClientList/>} path = "/client-list"/>
      <Route element = {<Detailed/>} path = "/detail-trans"/>
    </Routes>
    {/* <Header2/>
    <Homepage/>
    <TableTab/>
    <ProductList/>
    <ClientList/>
    <Footer/> */}
    </>
  )
}

export default App
