/* eslint-disable no-unused-vars */
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom';
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/products" Component={Products}/>
      <Route exact path="/products:/id" Component={Product}/>
      </Routes>
    </>
  )
}

export default App
