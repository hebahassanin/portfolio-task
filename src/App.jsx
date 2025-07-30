import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills'; 
import Experience from './Components/Experience/Experience';
import Work from './Components/Work/Work';
import { RouterProvider } from 'react-router';

function App() {

  const routes= createBrowserRouter([
    {
      path:'/',
      element:<MasterLayout/>,
      children:[
        {index:true, element:<Home/>},
        {path:'home',element:<Home/>},
        {path:'about', element:<About/>},
        {path:'skills', element:<Skills/>},
        {path:'experience',element:<Experience/>},
        {path:'work',element:<Work/>}
      ]
    }
  ])
  

  return (
    <>
     {/* <MasterLayout/> */}
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
