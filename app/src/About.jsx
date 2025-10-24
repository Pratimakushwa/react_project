import React from 'react'
import pica from './assets/about.webp'



const About = () => {
  return (
<>
<h1 className ="text-3xl font-bold mb-2 text-center py-8">About US</h1>
<div className='flex gap-8 justify-center'>
  <div>
<img src={pica} alt="" className='w-88 h-80' />
  </div>
  <div>
    <p>Doctor appointment system ka main purpose patients aur doctors ke beech ek easy aur fast <br/>
      connection banana hai. Is system ke through patients apne convenient time par online<br/>
       appointment book kar sakte hain. Doctor appointment website se patients ko waiting line <br/>
       me khade hone ki zarurat nahi hoti — wo ghar baithe hi doctor ka schedule dekh kar <br/>
       slot select kar sakte hain.<br/>.<br/>


      This system ensures faster and more organized healthcare services <br/>by providing features like appointment scheduling, reminders, and online consultations.<br/> It helps both doctors and patients save time and manage appointments efficiently.

     With the Doctor <br/>Appointment System, healthcare becomes more accessible, convenient, and reliable<br/> — bringing quality medical services just a click away.<br/>

“Your health, our priority —<br/> book your doctor anytime, anywhere.”</p>

  </div>
</div>
</>  
)
}

export default About