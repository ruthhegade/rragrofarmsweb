import React from 'react'
import ReactDOM from 'react-dom';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider  } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';
import NewProduct from './Pages/NewProduct.jsx';
import Signup from './Pages/Signup.jsx';
import 'react-toastify/dist/ReactToastify.css';


const router  = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<App/>}>
   <Route index element={<Home/>} />
   <Route path='menu' element={<Menu/>} />
   <Route path='about' element={<About/>} />
   <Route path='contact' element={<Contact/>} />
   <Route path='login' element={<Login/>} />
   <Route path='newproduct' element={<NewProduct/>} />
   <Route path='signup' element={<Signup/>} />
  </Route>
  )
)

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )