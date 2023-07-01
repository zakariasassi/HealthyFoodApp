import React, { useEffect , useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { imageserver, url } from "../../../../dashboard/src/constent/url";



function Home() {


  const navigate = useNavigate();
  const [categorys , setCategorys] = useState([])
  const colors = ['yellow' , 'green' , 'red' , 'orange' , 'pink' ,'purple' , 'blue' ]

  const [meals, setMeals] = useState([]);


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

    const getlastmesals = async () => {
    axios.get( url +  '/getLastFoodIteam')
    .then(response => {
      setMeals(response.data.data);
    })
    .catch(error => {
      console.error('Error retrieving meals:', error);
    });
    }

  useEffect(() => {
    getlastmesals()

    // getallcategorys()
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
{/* 
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
        </div> */}
            <div className="flex flex-row flex-wrap  pt-20 pb-20" dir="rtl">
            <div className="w-full">
            <h2 className="text-3xl font-bold text-green-800 text-right mt-10 ">
            المضافة حديثا
        </h2>
            </div>
            <div className="w-full">
        <div className="flex flex-wrap grid grid-cols-3 justify-between w-full">
          {meals.map((meal, index) => (
            
            <div key={index} className="w-64 p-2 m-10 bg-white shadow-lg rounded-2xl" dir='rtl'>
              <img src={ imageserver +  meal.image} alt={meal.name} className="w-auto  p-4 m-auto h-auto" />
              <div className="p-4 m-3 bg-green-200 rounded-lg">

              <p className="text-xl font-bold text-black">اسم الاكلة</p>
                <p className="text-xl font-bold text-black">{meal.name}</p>


                <p className="text-xl font-bold text-black"> مكونات الوصفة</p>
                <p className="text-xs text-black">{meal.ingredients}</p>

                <p className="text-xl font-bold text-black"> السعرات </p>
                <p className="text-xl font-bold text-black">{meal.calories}</p>

                
                <p className="text-xl font-bold text-black"> التصنيف </p> 
                  <p className="text-black">{meal.category}</p>
                <div className="flex items-center justify-between">


              
        
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
            </div>
      </div>
    </>
  );
}

export default Home;
