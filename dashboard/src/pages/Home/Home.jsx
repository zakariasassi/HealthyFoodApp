import { FaUsers, FaUser } from "react-icons/fa";

function Home() {

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    // Add more user data here
  ];
  return (
    <>
            <div className="p-8 w-full" dir='rtl'>
      <h2 className="text-2xl font-bold mb-4"> احصائيات عامة</h2>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">اخر 10 مسخدمين</h3>
          </div>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">Total Users</h3>
          </div>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">Total Users</h3>
          </div>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaUsers className="ml-2" />
            <h3 className="font-bold text-lg">Total Users</h3>
          </div>
          <p className="text-3xl font-bold">{users.length}</p>
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
          {users.slice(0, 10).map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td>3-3-2020</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home
