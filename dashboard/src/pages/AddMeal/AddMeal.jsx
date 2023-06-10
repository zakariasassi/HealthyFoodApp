import React from 'react'
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";

function AddMeal() {
  return (
    <>
    <div className="w-full p-4" dir='rtl'>
      <h1 className="text-2xl font-bold mb-4">ادخال اكلة جديدة</h1>
      <form className="flex flex-col space-y-4">
        <div className="flex items-center">
          <label htmlFor="foodName" className="w-40 font-bold">
            اسم الاكلة:
          </label>
          <input
            type="text"
            id="foodName"
            className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
            dir="rtl"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="ingredients" className="w-40 font-bold">
            المواد:
          </label>
          <textarea
            id="ingredients"
            className="border border-gray-300 rounded-md px-4 py-2 flex-grow resize-none"
            dir="rtl"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="calories" className="w-40 font-bold">
            السعرات الحرارية:
          </label>
          <input
            type="number"
            id="calories"
            className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
            dir="rtl"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="category" className="w-40 font-bold">
            التصنيف:
          </label>
          <input
            type="text"
            id="category"
            className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
            dir="rtl"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="foodImage" className="w-40 font-bold">
            صورة الاكلة:
          </label>
          <input
            type="file"
            id="foodImage"
            className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
          />
        </div>

        <div className="flex items-center">
          <label className="w-52"></label>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center w-52 justify-center">
              <RiEditLine className="mr-1" />
              حفظ
            </button>
      
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default AddMeal
