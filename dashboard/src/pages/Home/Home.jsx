import { useEffect, useState } from "react";
import { FaUsers, FaUser } from "react-icons/fa";
import axios from 'axios'
import { url } from '../../constent/url';


function Home() {

  const [lastusers , setLastUsers] = useState([])

  const [userscounr , setuserCount] = useState(0)
  const [mealscount , setmealsCount] = useState(0)
  const [categoryscount , setcategoryscount] = useState(0)
  const [infocount , setinfocount] = useState(0)



  const getlastusers = async () => {
    await axios.get(url + '/getLastUsers').then(res => {

      setLastUsers(res.data.data)
      console.log(res.data.data)
      
    }).catch( err => {
      console.log(err)
    })
  }
  async function getcounts() {
    try {
      const response1 = await axios.get(url + '/getuserscounts');
      console.log('Data from endpoint 1:', response1.data);
      setuserCount(response1.data.count)
      const response2 = await axios.get(url + '/getmealscount');
      console.log('Data from endpoint 2:', response2.data);
      setmealsCount(response2.data.count)


      const response3 = await axios.get(url + '/getcategorycounr');
      console.log('Data from endpoint 3:', response3.data);
  
      setcategoryscount(response3.data.count)

      const response4 = await axios.get(url + '/getinfocount');
      console.log('Data from endpoint 4:', response4.data);
      setinfocount(response4.data.count)

      // Add more requests as needed...
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

      useEffect(() => {
        getlastusers()
        getcounts()
      },[])






  return (
    <>
            <div className="p-8 w-full" dir='rtl'>
      <h2 className="text-2xl font-bold mb-4"> احصائيات عامة</h2>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">عدد  مسخدمين</h3>
          </div>
          <p className="text-3xl font-bold">{userscounr}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">عدد الاكلات</h3>
          </div>
          <p className="text-3xl font-bold">{mealscount}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">عدد التصنيفات</h3>
          </div>
          <p className="text-3xl font-bold">{categoryscount}</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">معلومة صحية</h3>
          </div>
          <p className="text-3xl font-bold">{infocount}</p>
        </div>
        {/* Add more cards here */}
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">اخر 10 مسخدمين</h2>
      
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">الاسم</th>
            <th className="py-2 px-4">البريد</th>
            <th className="py-2 px-4">موعد فتح الحساب</th>

          </tr>
        </thead>
        <tbody>
          {lastusers.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.username}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home
