import React , {useState  , useEffect} from 'react'
import axios from 'axios'
import { url } from '../../constent/url';
import toast, { Toaster } from 'react-hot-toast';

function AddInfo() {


  const [title , setTitle] = useState('');
  const [description , setSdescription] = useState('');


  const notify = (msg) => toast.success(msg  );

  




  const addnewinfo  = async () => {
    await axios.post( url +  '/addnewinfo'  , {title , description}).then((res) => {
      console.log(res.data.msg)
      notify(res.data.msg)
    }).catch((err) => {console.log(err)})
  }



  return (
    <>
          <Toaster
            position="bottom-left"
  reverseOrder={false}
           />

        <div className=' w-full m-auto  flex justify-center items-center   ' dir='rtl'>
            <div className=' w-full  h-full m-auto flex items-center justify-center '>

            <div className="   p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl shadow-2xl">
            <div className=' flex justify-center flex-col'>
            <div >
				<h1 className="font-bold uppercase text-5xl">  اضف معلومة صحية <br /> جديدة </h1>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input onChange={e => setTitle(e.target.value)} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="العنوان " />

        </div>
				<div className="my-4">
					<textarea onChange={e => setSdescription(e.target.value)}  placeholder="محتوي المعلومة" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button onClick={() => {addnewinfo()}} className="uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            اضافة
          </button>
				</div>
            </div>

			</div>

            </div>
        </div>
    </>
  )
}

export default AddInfo
