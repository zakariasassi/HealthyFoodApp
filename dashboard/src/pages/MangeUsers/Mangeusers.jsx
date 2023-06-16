import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { url } from '../../constent/url';

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from the backend
    axios.get( url + '/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error retrieving users:', error);
      });
  }, []);

  return (
    <>
      <Box style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", padding: 20, width: '100%' }}>
        <div className='w-100' style={{ height: '100vh' }}>
          <table className="table m-5 p-lg-5" dir='rtl'>
            <thead dir='rtl'>
              <tr>
                <th scope="col">#</th>
                <th scope="col" style={{ textAlign: 'center' }}>اسم المستخدم</th>
                <th scope="col" style={{ textAlign: 'center' }}>البريد الالكتروني</th>
                <th scope="col" style={{ textAlign: 'center' }}>اخر دخول</th>
                <th scope="col" style={{ textAlign: 'center' }}> الاسم كامل</th>
                <th scope="col" style={{ textAlign: 'center' }}>عمليات</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td style={{ textAlign: 'center' }}>{user.username}</td>
                  <td style={{ textAlign: 'center' }}>{user.email}</td>
                  <td style={{ textAlign: 'center' }}>{user.last_login}</td>
                  <td style={{ textAlign: 'center' }}>{user.fullname}</td>
                  <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
                    <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  )
}

export default ManageUsers;
