import React from 'react'
import {BsFacebook , BsWhatsapp} from 'react-icons/bs'
import {AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className=' bg-gradient-to-br from-violet-500 to-black  rounded-t-xl  text-white flex lg:flex-row-reverse flex-col w-full justify-around items-center mt-10 p-7'>
            <div className="  cursor-pointer my-4 text-sm lg:text-lg capitalize w-1/2 h-auto lg:p-4 flex flex-row justify-around items-center">
                <div id='da' className=" ml-[-35px]">
                    <h2 className=' cursor-default text-lg md:text-2xl font-bold'>Company</h2>
                    <h1>About</h1>
                    <h1>Blog</h1>
                    <h1>Contact</h1>
                    
                </div>
                <div className=" mr-[-35px]">
                <h2 className=' cursor-default text-lg  md:text-2xl font-bold'>Product</h2>
                    <h1>ChatAi</h1>
                    <h1>to do app</h1>
                    <h1>Securiy</h1>
                </div>
            </div>
            <div className=" w-1/2 h-auto lg:p-4 relative ">
                <div className="justify-center items-center text-center lg:text-left block lg:my-[30px] lg:mx-10">
                    <h2 className=" text-3xl font-bold mb-6 ">
                        Wevo.
                    </h2>
                    <p className=" text-[10px] lg:text-lg ">
                        All Right Reserved 2023
                    </p>
                </div>
                <div className=" flex flex-row lg:my-5 p-3 justify-center lg:justify-start items-center mt-[30px]">
                    <a href="">
                        <BsFacebook  className=' mx-2 lg:ml-5 hover:bg-slate-400 transition-all ease-in p-2 hover:rounded-full ' size={50}/>
                    </a>
                    <a href="">
                        <BsWhatsapp  className=' mx-2 lg:ml-5 hover:bg-slate-400 transition-all ease-in p-2 hover:rounded-full 'size={50}/>
                    </a>
                    <a href="">
                        <AiFillYoutube  className=' mx-2 lg:ml-5 hover:bg-slate-400 transition-all ease-in p-2 hover:rounded-full 'size={50}/>
                    </a>
                    <a href="">
                        <AiFillLinkedin  className=' mx-2 lg:ml-5 hover:bg-slate-400 transition-all ease-in p-2 hover:rounded-full 'size={50}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
