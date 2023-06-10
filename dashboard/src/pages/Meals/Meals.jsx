import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const foodData = [
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    id: 1,
    name: "Salad",
    ingredients: "Lettuce, tomatoes, cucumbers",
    calories: 150,
    category: "Vegetarian",
    image: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  
  // Add more food items here
];

function Meals() {
  return (
    <>
         <div className="w-full p-4" dir='rtl'>
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
                  src={food.image}
                  alt={food.name}
                  className="w-16 h-16 object-cover"
                />
              </td>

              <td style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                          <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2"><i className="fa-sharp fa-solid fa-trash"></i></button>
                          <button   type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2"><i className="fa-solid fa-pen-to-square"></i></button>
                          {/* <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle ml-2"><i className="fa-solid fa-circle-stop"></i></button> */}
                        </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Meals
