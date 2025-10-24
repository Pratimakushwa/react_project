import React from 'react'

const Footer = () => {
  return (
    <>

   <div className='flex justify-evenly bg-white shadow-md'>
    <div>
        <h1 className='font-black font-'>Presripto</h1>
        <p className='pt-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Error facere amet quos eaque numquam suscipit tempore officiis dolorum <br/>a eius necessitatibus, accusantium, perspiciatis porro <br/>praesentium delectus ducimus similique repudiandae dicta!
        </p>

    </div>
    <div>
        <h1 className='font-bold'>company</h1>
        <ul className='pt-4'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>privacy policy</li>
        </ul>

    </div>
    <div>
        <h1 className='font-bold'>Get In Touch </h1>
        <p className='pt-4'>-1-212-456-7890</p>

    </div>
   </div>
    
    
    
    </>
  )
}

export default Footer