import React from 'react'
import {Satisfy} from "@next/font/google"

const satisfy = Satisfy({
  weight:'400',
  subsets:['latin'],
})
function Testimonial() {
  return (
    <div className='bg-blue-500 lg:h-screen w-screen flex flex-col max-lg:items-center'>
    <h1 className={`text-6xl ${satisfy.className} text-center pt-10`}>Testimonials</h1>
    <div className='lg:flex-grow lg:flex justify-evenly items-center'>
      
       <div className='bg-gray-300 lg:h-96 lg:w-72 h-96 w-72 md:h-80 md:w-96 flex flex-col items-center max-lg:mt-11 max-lg:mb-20'>
         <img src="/gwoc-about2.jpg" alt="" className='w-20 h-20 rounded-full -mt-9'/>
         <p className='px-3 pt-11 text-black text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio in soluta voluptatem sit possimus omnis illo nam inventore distinctio consequatur quam quae aliquam, nostrum expedita unde provident molestiae voluptates.</p>
       </div>
       <div className='bg-gray-300 lg:h-96 lg:w-72 h-96 w-72 md:h-80 md:w-96 flex flex-col items-center max-lg:mt-11 max-lg:mb-20'>
        <img src="/gwoc-about2.jpg" alt="" className='w-20 h-20 rounded-full -mt-9'/>
        <p className='px-3 pt-11 text-black text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta obcaecati repellat dolorem distinctio, similique architecto qui ducimus vel consectetur minus harum culpa itaque. Quis totam repudiandae dolore incidunt at?</p>
       </div>
       <div className='bg-gray-300 lg:h-96 lg:w-72 h-96 w-72 md:h-80 md:w-96 flex flex-col items-center max-lg:mt-11 max-lg:mb-20'>
        <img src="/gwoc-about2.jpg" alt="" className='w-20 h-20 rounded-full -mt-9'/>
        <p className='px-3 pt-11 text-black text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laudantium recusandae delectus, cum assumenda natus quam deserunt voluptate tempora asperiores totam distinctio perspiciatis alias. Neque saepe suscipit commodi reiciendis maxime.</p>
       </div>
    </div>
    </div>
  )
}

export default Testimonial