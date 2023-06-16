import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../constent/url';

function AddMealForm() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [calories, setCalories] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [categorys , setCategorys] = useState([]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('ingredients', ingredients);
      formData.append('calories', calories);
      formData.append('category', category);
      formData.append('image', image);
      await axios.post(  url + '/createFoodItem', formData).then(() => {
        console.log('تمت إضافة الوجبة بنجاح');

      }).catch(err => {
        console.log(err)
      })

      // Reset form fields


      // Show success message or perform any other action
    } catch (error) {
      console.error('حدث خطأ أثناء إضافة الوجبة:', error);
      // Show error message or perform any other error handling
    }
  };


  const getAllCategorys = async () => {
    try {
      const response = await axios.get(url + '/getAllCategories');
      setCategorys(response.data.Categorys);
    } catch (error) {
      console.error('Error retrieving categories:', error);
    }
  };


  useEffect(() => {
    getAllCategorys()
  },[])

  return (
<form onSubmit={handleFormSubmit} className="w-full  m-10 p-14 border " dir='rtl'>
  <div className="mb-4">
    <label htmlFor="name" className="text-lg font-bold">
      اسم الوجبة
    </label>
    <input
      type="text"
      id="name"
      className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
      placeholder="اسم الوجبة"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="ingredients" className="text-lg font-bold">
      المكونات
    </label>
    <input
      type="text"
      id="ingredients"
      className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
      placeholder="المكونات"
      value={ingredients}
      onChange={(e) => setIngredients(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="calories" className="text-lg font-bold">
      السعرات الحرارية
    </label>
    <input
      type="number"
      id="calories"
      className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
      placeholder="السعرات الحرارية"
      value={calories}
      onChange={(e) => setCalories(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="category" className="text-lg font-bold">
      التصنيف
    </label>
    <select
      id="category"
      className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">اختر التصنيف</option>
      {categorys.map((data, key) => (
        <option key={key} value={data.name}>
          {data.name}
        </option>
      ))}
    </select>
  </div>

  <div className="mb-4">
    <label htmlFor="image" className="text-lg font-bold">
      صورة الوجبة
    </label>
    <input
      type="file"
      id="image"
      className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
      onChange={(e) => setImage(e.target.files[0])}
    />
  </div>

  <button
    type="submit"
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
  >
    إضافة الوجبة
  </button>
</form>

  );
}

export default AddMealForm;
