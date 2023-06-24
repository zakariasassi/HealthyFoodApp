import React, { useEffect , useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../../dashboard/src/constent/url";
function Home() {
  const navigate = useNavigate();
  const [categorys , setCategorys] = useState([])
  const colors = ['yellow' , 'green' , 'red' , 'orange' , 'pink' ,'purple' , 'blue' ]



  const getallcategorys = async () => {
    await axios.get(url + "/getAllCategories").then( res => {
      setCategorys(res.data.Categorys)
    }).catch((err) => {
      console.log(err)
    })
  }

  const gotomeals = (e) => {
    navigate("/meals");
  };


  useEffect(() => {
    getallcategorys()
  },[])

  return (
    <>
      <TopBar />

      <div className="container w-4/6 m-auto">
        <div className="flex flex-col justify-center items-center p-20 bg-green-50 mt-10 shadow-md rounded-xl">
          <h2 className="text-5xl font-bold text-orange-400 text-center">
            يمكنك البحث عن الوجبات الصحية بكل سهولة
          </h2>
          <p className="text-2xl mt-4 ">
            استمتع بحياة صحية افضل وقم بالحصول علي افضل الوصفات الصحية{" "}
          </p>
          <button
            onClick={(e) => {
              gotomeals(e);
            }}
            className="h-10 w-25 bg-green-500 text-white px-4 rounded-lg mt-2  text-center font-bold hover:bg-green-900 "
          >
            تصفح الاكلات
          </button>
        </div>

        <h2 className="text-3xl font-bold text-green-800 text-center mt-10 ">
          استعمل التصنيفات للوصول للوجبات بسرعة
        </h2>

        <div className="w-full mt-10 ">
          <div className="  flex-row justify-around items-center grid grid-cols-6   }">
  

              {
                categorys.map((data , key) => {
                  var item = colors[Math.floor(Math.random()*colors.length)];
                  return (
                    <div className={`bg-green-400 h-10 w-25 px-5 py-2  rounded-lg  flex flex-wrap  justify-center items-center  m-4 cursor-pointer  hover:bg-green-300 duration-200 hover:shadow-lg hover:p-6`}>
                    <span className='text-white'>
             {data.name} 
              </span>
            </div>
                  )
                })
              }
          </div>
        </div>
            <div className="flex flex-row flex-wrap  pt-20 pb-20" dir="rtl">
            <div className="w-full">
            <h2 className="text-3xl font-bold text-green-800 text-right mt-10 ">
            المضافة حديثا
        </h2>
            </div>
        <div className="w-44 h-80 rounded overflow-hidden shadow-lg mt-8">
          <img
            className="w-full"
            src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/590ffd4ebcc5d9e3db74ac7952fc38f0"
            alt="Food Ads"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Last Food Ads</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, diam eget varius fringilla, velit mauris bibendum turpis,
              vel bibendum sapien magna vel sapien.{" "}
            </p>
          </div>
        </div>
            </div>
      </div>
    </>
  );
}

export default Home;
