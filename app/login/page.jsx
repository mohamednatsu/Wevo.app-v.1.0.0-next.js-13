import React from 'react'

function Login() {
    let sty = "outline-none p-2 my-5 mx-auto md:text-xl text-lg rounded-md w-[70%] lg:w-[60%] h-11 focus:border focus:border-teal-500 focus:outline transition-all ease-in";
    return (
        <div className=' w-full flex h-screen justify-center items-center'>
            <div className=' text-center bg-gradient-to-r from-violet-500 to-teal-500 sm:w-[70%] md:w-[75%] lg:w-1/2 h-[50%] lg:h-[57%] flex mx-auto p-4 justify-center rounded-md shadow-lg'>
                <div className='w-full justify-center items-center flex flex-col mx-auto'>
                <h2 className='  text-center text-4xl font-bold text-white mb-2'>Log in</h2>
                <input className={sty}  placeholder='Email or Username'/>
                <input className={sty} placeholder='Password'/>

                <button className=' bg-black text-white w-[35%] mb-3 mt-4 h-fit flex justify-center items-center p-2 rounded-md shadow-md border-none transition-all hover:scale-110 ease-in'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login