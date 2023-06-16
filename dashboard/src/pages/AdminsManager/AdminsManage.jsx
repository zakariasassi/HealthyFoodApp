import React, { useState , useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import {url} from "../../constent/url"


function AdminsManage() {


  const [modalVisible, setModalVisible] = useState(false);
  const [admins , setAdmins] = useState([])
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    phone: "",
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send the form data to the backend to add/update the admin
    await axios.post(url + '/addadmin' , formData)
  };


  const deleteadmin = async (id ,  event) => {
    event.preventDefault();
    await axios.delete(url + `/deleteadmin/${id}`).then((res) => {
      getalladmins()
    })
  }
  const getalladmins = async () => {
    await axios.get(url + '/getAlladmins').then( res => {
      setAdmins(res.data.admins)
    })

  }

  useEffect(() => {
    getalladmins()
  }, [admins])

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <div className="w-100" style={{ height: "100vh" }}>
          <button
            onClick={toggleModal}
            className="block text-white float-right mb-20 mt-12 bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            type="button"
          >
            اضافة مدير نظام
          </button>

          {modalVisible && (
            <div
              id="defaultModal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen bg-black bg-opacity-50"
            >
              <div className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    اضافة مدير نظام
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleModal}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex  w-full h-full  m-auto  bg-white justify-center items-center rounded-lg   ">
                    <div className="p-6 mt-8 w-full h-full">
                      <form   >
                        <div className="flex flex-col mb-2">
                          <div className=" flex flex-row ">
                            <input
                              type="text"
                              id="create-account-pseudo"
                              className="m-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              name="username"
                              value={formData.username}
                              onChange={handleInputChange}
                              placeholder="@username"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mb-2">
                          <div className=" flex flex-row ">
                            <input
                              type="text"
                              id="create-account-pseudo"
                              className=" m-2 p-2 rounded-lg border-transparent  appearance-none border border-gray-300 w-2/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+218"
                            />

                            <input
                              type="text"
                              id="create-account-pseudo"
                              className="m-2 p-2 rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="email"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mb-2">
                          <div className=" flex flex-row ">
                            <input
                              type="password"
                              id="create-account-pseudo"
                              className="m-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              placeholder="password"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mb-2">
                          <div className=" flex flex-row ">
                            <input
                              type="text"
                              id="create-account-pseudo"
                              className="m-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              name="fullname"
                              value={formData.fullname}
                              onChange={handleInputChange}
                              placeholder="full name"
                            />
                          </div>
                        </div>
                        <div className="flex w-full my-4">
                          <button
                          onClick={e => handleSubmit(e)}
                            type="submit"
                            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            فتح الحساب
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={toggleModal}
                  >
                    الغاء
                  </button>
                </div>
              </div>
            </div>
          )}
          <table className="table m-10 p-lg-5 w-4/5" dir="rtl">
            <thead dir="rtl">
              <tr>
                <th scope="col">#</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  اسم المستخدم{" "}
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  البريد الالكتروني
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  اخر دخول
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  رقم الهاتف
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  عمليات
                </th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={admin.id}>
                  <th scope="row">{admin.id}</th>
                  <td style={{ textAlign: "center" }}>{admin.fullname}</td>
                  <td style={{ textAlign: "center" }}>{admin.email}</td>
                  <td style={{ textAlign: "center" }}>{admin.last_login}</td>
                  <td style={{ textAlign: "center" }}>{admin.phone}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2"
                      onClick={(e) => deleteadmin(admin.id , e)}
                    >
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2"
                      onClick={() => handleEdit(admin)}
                    >
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
  );
}

export default AdminsManage;
