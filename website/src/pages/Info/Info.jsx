import React , {useState , useEffect} from 'react'
import TopBar from '../../components/TopBar/TopBar'
import  axios  from 'axios';
import { url } from '../../../../dashboard/src/constent/url';

function info() {


  const [info , setInfo] = useState([])

  const getallinfo = async () => {
    await axios.get( url +  '/getallinfo').then(res  => {
      setInfo(res.data.info)
    }).catch( err => {
      console.log(err)
    })
  }




  useEffect(() => {
    getallinfo()
  },[])

  return (
    <>
      <TopBar />


      <div className='flex flex-col w-full m-100' dir='rtl'>

        {
          info.map( (info , key) => {
            return (
              <>
              <div className='mt-100 w-3/4  m-20'>
      <div className='flex flex-col m-100 ' >
              <div className='flex  flex-col'>
              <h1 className='text-3xl text-stone-900'>{info.title} </h1> 
             <span  className='text-xl'>date : {info.createdAt}</span> 

              </div>
        <p className='text-xl'>{info.description}</p>

        </div>
      </div>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default info
