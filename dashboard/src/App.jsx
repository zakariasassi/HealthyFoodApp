import { useState } from 'react'
import Layout from './Layout/Layout';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mangeusers from './pages/MangeUsers/Mangeusers';
import AdminsManage from './pages/AdminsManager/AdminsManage';
import AddNewAdmin from './pages/AddNewAdmin/AddNewAdmin';
import Categorys from './pages/Categorys/Categorys';
import AddNewCategory from './pages/AddNewCategory/AddNewCategory';
import AddMeal from './pages/AddMeal/AddMeal';
import AddInfo from './pages/AddInfo/AddInfo';
import './App.css'

function App() {

  return (
    <>

   <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout page={<Home/>}/> } />
          <Route path='/home' element={<Layout page={<Home/>}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/mangeusers' element={<Layout page={ < Mangeusers/> } />} />
          <Route path='/admins' element={<Layout page={ < AdminsManage/> } />} />
          <Route path='/addadmin' element={<Layout page={ < AddNewAdmin/> } />} />
          <Route path='/categorys' element={<Layout page={ < Categorys/> } />} />
          <Route path='/addcategory' element={<Layout page={ < AddNewCategory/> } />} />
          <Route path='/addmeal' element={<Layout page={ < AddMeal/> } />} />
          <Route path='/addinfo' element={<Layout page={ < AddInfo/> } />} />

        </Routes>
    </BrowserRouter> 




    </>
  )
}

export default App
