import React from 'react'
import pic1 from './assets/doc1.webp'
import pic2 from './assets/doc2.webp'
import pic3 from './assets/doc3.jpg'
import pic4 from './assets/doc4.webp'
import pic5 from './assets/doc5.webp'
import pic6 from './assets/doc6.webp'


const Alldoctor = () => {
  return (
    <>
     <h1 className="text-center text-2xl font-bold mb-2">Top  doctor to book</h1>
      <p className="text-center  font-medium mb-8">
        Simply browse through extensive, trusted doctors.<br />  
        .
      </p>
 <div className="py-8 flex justify-center flex-wrap gap-20    ">
  <div className=' bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 '>
    <img src={pic1} alt=""  />
    <p className='text-center  text-2xl font-black' >Dr. Rechad James</p><h1/><br/>
    <p  className=' text-center '>General Physician</p>

  </div>
  <div className='  bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 '>
    <img src={pic2} alt="" />
    <p className='text-center font-black'>Dr. Rayan martinez</p><h1/><br/>
    <p  className='text-center '>Gynorologist</p>

  </div>
  <div className='  bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 '>
    <img src={pic3} alt=""  className='w-64'/>
    <p className='text-center font-black'>Dr.Emily larson</p><h1/><br/>
    <p  className='text-center '>pediatrician</p>

  </div>
  <div className=' bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 '>
    <img src={pic4} alt=""  />
    <p className='text-center font-black'>Dr.Amellia hill</p><h1/><br/>
    <p className='text-center '>Dermologist</p>

  </div>
  <div className=' bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 '>
    <img src={pic5} alt="" />
    <p className='text-center font-black' >Dr. Jeniffer  gercia</p><h1/><br/>
    <p  className='text-center '>neurologist</p>

  </div>
  <div className='  bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 '>
    <img src={pic6} alt="" />
    <p className='text-center font-black'>Dr.sarah patel</p><h1/><br/>
    <p  className='text-center '>Dermologist</p>

  </div>
      
    </div>  
    </>
  )
}

export default Alldoctor