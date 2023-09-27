import React from 'react'
import Image from 'next/image'
import png from './about.png'
function page() {
    return (
        <div className=' mx-auto flex flex-col justify-around items-center w-full'>
            <h2 className=' mt-10 lg:text-[45px] text-[30px] text-violet-500 font-bold text-center p-2'>About</h2>
            <div className=" p-4">
                <Image
                    width={500}
                    height={500}
                    alt='about png'
                    src={png}
                />
            </div>
            <div className=" p-5">
                <h2 className=' font-sans sm:text-[19px] leading-[45px] text-center lg:text-3xl capitalize lg:leading-[85px] font-bold text-[#333]'>
                    wevo app is a social community in web to share art and visible graphic work <br />
                    to get many likes in your art , so our porpuse to improve <br /> the creative ideas to become very profissonal in your art.
                </h2>
            </div>
        </div>
    )
}

export default page