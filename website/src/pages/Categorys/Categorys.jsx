import React , {useState , useEffect} from 'react'
import TopBar from '../../components/TopBar/TopBar'
import axios from 'axios'
import { imageserver, url } from '../../../../dashboard/src/constent/url'
function Categorys() {

  const colors = ["pink", "red", "yellow", "green", "blue", "purple", "white", "", "teal" , "lime"];


  const [categorys , setCategorys] = useState([])
  const [meals , setMeals] = useState([])

  
  const getallcategorys = async () => {
    await axios.get(url + "/getAllCategories").then( res => {
      setCategorys(res.data.Categorys)
    }).catch((err) => {
      console.log(err)
    })
  }

    
  const getmealsbycategory = async (cat) => {
    console.log(cat)
    await axios.get(url + `/getmealsbycategory/${cat}`).then( res => {
      console.log(res.data)
      setMeals(res.data.meals)
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


    <div className='w-full flex justify-center'>
      <div className='w-30 m-10'>

      <h2 className="text-3xl font-bold text-orange-500 text-center mt-10 ">
          استعمل التصنيفات للوصول للوجبات بسرعة
        </h2>

        <div className="w-full mt-10 ">
          <div className="flex flex-wrap flex-row  items-center">
          {
                categorys.map((data , key) => {
                  const randomColor = colors[Math.floor(Math.random() * colors.length )];
                  return (
                    <div onClick={() => {getmealsbycategory(data.name)}}  key={key} className={`bg-green-400 h-10 w-25 px-5 py-2  rounded-lg  flex justify-center items-center  m-4 cursor-pointer  hover:bg-green-300 duration-200 hover:shadow-lg hover:p-6`}>
             <span className='text-white'>
             {data.name} 
              </span>
            </div>
                  )
                })
              }
            </div>



          </div>
        </div>
      </div>

      <div className="w-full h-screen flex justify-center">
      <div className="w-5/6">
        <div className="flex flex-wrap justify-between">
          {meals?.map((meal, index) => (
            
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


              
                  <button
                    type="button"
                    className="w-10 h-10 text-base font-medium text-black bg-green-500 rounded-full hover:bg-green-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="mx-auto"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Categorys
