import React from 'react'
import { Box } from '@mui/material';

function AdminsManage() {
  return (
    <>
         <Box style={{display:"flex" , flexDirection:"coulmn" , justifyContent:'center' , alignItems: "center" , padding: 20 , width:'100%' }}>
           <div className='w-100' style={{  height:'100vh'}}>
      <table className="table m-5 p-lg-5" dir='rtl'>
  <thead dir='rtl' >
    <tr   >
      <th scope="col">#</th>
      <th scope="col" style={{textAlign:'center'}}>اسم المستخدم </th>
      <th scope="col" style={{textAlign:'center'}} >البريد الالكتروني</th>
      <th scope="col" style={{textAlign:'center'}}>اخر  دخول</th>
      <th scope="col" style={{textAlign:'center'}}>رقم الهاتف</th>

      <th scope="col" style={{textAlign:'center'}}>عمليات</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td style={{textAlign:'center'}} >  محمد علي خالد </td>
      <td  style={{textAlign:'center'}}  >zakaeia@gmail.com</td>
      <td  style={{textAlign:'center'}}  >3-4-2020</td>
      <td  style={{textAlign:'center'}}  >09241678490</td>




      <td style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                          <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2"><i className="fa-sharp fa-solid fa-trash"></i></button>
                          <button   type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2"><i className="fa-solid fa-pen-to-square"></i></button>
                          {/* <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle ml-2"><i className="fa-solid fa-circle-stop"></i></button> */}
                        </td>

    </tr>

  </tbody>
</table>
           </div>
        </Box> 
    </>
  )
}

export default AdminsManage
