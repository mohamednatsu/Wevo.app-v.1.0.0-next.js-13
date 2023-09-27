import React from 'react'

function page() {
    return (

        <div className=" mx-auto h-screen flex flex-col w-full justify-center  items-center gap-11 p-4">
            <h2 className='  lg:text-[45px] text-[30px] my-6 text-left text-violet-500 font-bold'>Contact Us</h2>
            <input type="text" placeholder='Name' className=' focus:border focus:border-violet-500 transition-all ease-in-out md:w-1/2 h-15 outline-none delay-200 w-[90%] rounded-md shadow-md p-4 text-xl text-black' />
            <input type="text" placeholder='Email' className=' focus:border focus:border-violet-500 transition-all ease-in-out md:w-1/2 h-15 outline-none delay-200 w-[90%] rounded-md shadow-md p-4 text-xl text-black' />
            <textarea name="" id="" cols="30" rows="10" className=' focus:border focus:border-violet-500 transition-all ease-in-out md:w-1/2 outline-none delay-200 w-[90%] rounded-md shadow-md p-4 text-xl text-black' placeholder=' Type Messge...'></textarea>
            <button className='bg-gradient-to-bl  from-violet-500 to-teal-500 text-white rounded-md shadow-md w-[150px] md:w-[200px] h-20 text-3xl  p-5 texdt-center mt-10'>Send</button>
        </div>

    )
}

export default page