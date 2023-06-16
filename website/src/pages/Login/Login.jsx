import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  axios  from 'axios';
import { url } from '../../../../dashboard/src/constent/url';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Authenticate the user and obtain an access token
    // Replace the following code with your authentication logic

    await axios.post(url + '/login', {
        username,
        password
    }).then((result) => {
        console.log(result);
        if (result.status === 200){
            window.location.href = '/home';
        }
    }).catch((err) => {
            console.log(err)
    });
    // Redirect the user to the desired page after login
    // Replace '/dashboard' with your desired redirect URL
  
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-950" dir='rtl' >
        <div className="w-2/5 bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleFormSubmit}>
            <h1 className='text-4xl mx-5 my-4 mb-10 text-emerald-500 font-bold'>مرحبا بك في تطبيق الاكل الصحي</h1>

            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                اسم المستخدم
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder=" username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 font-medium">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full h-20 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              دخول
            </button>

            <div className="mb-6 flex justify-center mt-10">
              <Link className='list-none no-underline text-center hover:text-green-500' to={'/signup'} >فتح حساب جديد</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
