import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { imageserver, url } from '../../../../dashboard/src/constent/url';
import TopBar from '../../components/TopBar/TopBar';
import { motion, useAnimation } from 'framer-motion';



function Meals() {
  const controls = useAnimation();

  const [meals, setMeals] = useState([]);

  const animateCards = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    // Fetch meals data from the backend
    axios.get( url +  '/getAllFoodItems')
      .then(response => {
        setMeals(response.data);
      })
      .catch(error => {
        console.error('Error retrieving meals:', error);
      });
  }, []);

  return (
    <>
        <TopBar />
     <div className="w-full h-screen flex justify-center">
      <div className="w-5/6">
        <div className="flex flex-wrap justify-between">
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
    </>
  )
}

export default Meals
