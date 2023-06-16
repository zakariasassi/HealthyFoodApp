import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../../../dashboard/src/constent/url';

function Signup() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new user object with the form data
    const newUser = {
      username,
      fullname: name,
      email,
      password
    };

    // Send a POST request to the signup endpoint with the user data using axios
    axios.post(url + '/signup', newUser)
      .then(response => {
        // Handle the response from the server
        console.log(response.data); // You can customize this based on your application's needs
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
                id="username"
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder=" username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder=" Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                البريد الالكتروني
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              فتح حساب جديد
            </button>

            <div className="mb-6 flex justify-center mt-10">
              <Link className='list-none no-underline text-center hover:text-green-500' to={'/Login'} >لدي حساب دخول  </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;
