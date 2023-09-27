
'use client'
import {AiOutlineArrowDown} from 'react-icons/ai'

import Image from "next/image"
import png from "./layout.png" 
import Link from 'next/link'



function Hero() {

    return (
        <>
        <div className='lg:w-[1240px] p-4 h-auto grid md:grid-cols-2 justify-around mx-auto items-center gap-2 mt-5'>
            
            <div id="hero" className=" w-full h-fit flex justify-center items-center">
                <Image 
                    src={png}
                    width= "300px"
                    height= "250px"
                    layout="responsive"
                    alt=" people"
                />
            </div>
            <div className=" text-3xl lg:w-full flex flex-col w-full justify-center items-center mx-auto">
                <h1 className=" capitalize lg:p-5 lg:text-5xl  font-bold md:text-left text-center lg:leading-[100px] leading-[50px]">
                    You Can Find here The <b className=" lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t p-2 from-violet-500 to-teal-500">{'Best Community'}</b> To improve Your Self
                </h1>
                <button className=' transition-all ease-in-out hover:scale-110 my-4 mx-auto bg-gradient-to-bl from-violet-500 to-teal-500 text-white p-3 rounded-md shadow-lg text-lg lg:text-3xl'>
                    <Link href="/posts">
                        Try Post
                    </Link>
                </button>
            </div>
        </div>
            <div className=" w-full h-[100px] flex justify-center items-center my-6">

            <div className=" animate-bounce bg-gradient-to-bl from-violet-500 to-teal-500 shadow-md rounded-full w-11 h-11 p-2 justify-center items-center flex">
                <AiOutlineArrowDown 
                size='30' 
                color='white'
                />
            </div>
            </div>
        </>
    )
}

export default Hero