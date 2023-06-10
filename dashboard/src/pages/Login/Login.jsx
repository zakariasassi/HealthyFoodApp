import {useEffect} from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import {useNavigate} from  'react-router-dom'
function Login() {
    const navigate = useNavigate()

    const handelLogin = (e) => {
      e.preventDefault()
    
    }

  return (
    <>
         <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-900 to-green-400">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6"> الدخول الي لوحة التحكم</h2>
        <div className="space-y-4 w-96" dir='rtl'>
          <div className="flex items-center">
            <FaUser className="text-gray-600 mr-3" />
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
              placeholder="اسم المتسخدم"
            />
          </div>
          <div className="flex items-center">
            <FaLock className="text-gray-600 mr-3" />
            <input
              type="password"
              className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
              placeholder="كلمة المرور"
            />
          </div>
          <button onClick={() => {   navigate('/home')}}  className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
            Login
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
