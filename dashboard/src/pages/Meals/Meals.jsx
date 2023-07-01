import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { imageserver, url } from "../../constent/url";

import {  Toaster, toast } from "react-hot-toast";

function Meals() {
  const [foodData, setFoodData] = useState([]);

    // Fetch food items from the server
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getAllFoodItems");
        setFoodData(response.data);
      } catch (error) {
        console.error("Error retrieving food items:", error);
      }
    };


  const deletemeale = async (id) => {
    await axios.delete( url +  `/deleteFoodItem/${id}`).then((res) => {

        toast.success(res.data.msg)
        fetchFoodItems();

    })
  }

  useEffect(() => {

    console.log(foodData)

    fetchFoodItems();
  }, []);

  return (
    <>
    <Toaster/>
      <div className="w-full p-4" dir="rtl">
        <h1 className="text-2xl font-bold mb-4">Food List</h1>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">اسم الاكلة</th>
              <th className="py-2 px-4">المواد</th>
              <th className="py-2 px-4">السعرات الحرارية</th>
              <th className="py-2 px-4">التصنيف</th>
              <th className="py-2 px-4">صورة الاكلة</th>
              <th className="py-2 px-4">التحكم</th>
            </tr>
          </thead>
          <tbody>
            {foodData.map((food) => (
              <tr key={food.id} className="hover:bg-gray-100">
                <td className="py-2 px-4">{food.name}</td>
                <td className="py-2 px-4">{food.ingredients}</td>
                <td className="py-2 px-4">{food.calories}</td>
                <td className="py-2 px-4">{food.category}</td>
                <td className="py-2 px-4">
                  <img
                    src={ imageserver +  food.image}
                    alt={  food.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <button  onClick={() => deletemeale(food.id)} type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                  {/* <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Meals;
