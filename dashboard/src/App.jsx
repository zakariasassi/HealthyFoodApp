import { useState } from 'react'
import Layout from './Layout/Layout';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mangeusers from './pages/MangeUsers/Mangeusers';
import AdminsManage from './pages/AdminsManager/AdminsManage';
import Categorys from './pages/Categorys/Categorys';
import AddMeal from './pages/AddMeal/AddMeal';
import AddInfo from './pages/AddInfo/AddInfo';
import './App.css'
import Meals from './pages/Meals/Meals';
import AllInfo from './pages/allinfo/AllInfo';

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
          <Route path='/allmeals' element={<Layout page={ < Meals/> } />} />
          <Route path='/categorys' element={<Layout page={ < Categorys/> } />} />
          <Route path='/addmeal' element={<Layout page={ < AddMeal/> } />} />
          <Route path='/addinfo' element={<Layout page={ < AddInfo/> } />} />
          <Route path='/allinfo' element={<Layout page={ < AllInfo/> } />} />

        </Routes>
    </BrowserRouter> 




    </>
  )
}

export default App
