import React from 'react'
import pic4 from "./assets/doc4.webp";


const Doc4 = () => {
  return (
    <>
     <div className ="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex justify-evenly m-30">
                <div >
                      <img src={pic4} alt="" className="w-64 h-64 object-cover rounded-xl" />
                      <p className="text-2xl font-black">Dr. Rechad James</p>
                      <p className="">General Physician</p>
                    </div>
                    <div className='pl-40'>
                     <p className='text-amber-300'>Dr. Rechad James is an experienced General Physician dedicated to providing <br/>
                      comprehensive healthcare for patients of all ages. With a strong focus on preventive <br/>
                       he ensures personalized treatment plans for each individual.<br/> His areas of expertise
                       include managing chronic illnesses,<br/> routine checkups,
                        and promoting overall wellness through modern and<br/> evidence-based 
                        medical practices.</p> 
        
                        <button className='bg-amber-500 rounded-2xl p-2 '>book appoiment</button>
                    </div>
            </div>
    </>
  )
}

export default Doc4