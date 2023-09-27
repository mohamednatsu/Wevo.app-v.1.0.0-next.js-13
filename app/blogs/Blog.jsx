import React from 'react'
import Image from 'next/image'
function Blog(props) {
    return (
        <div className='lg:h-[300px] w-full lg:w-[60%] md:flex-row flex flex-col items-center gap-9 py-3 px-5 rounded-md shadow-md bg-white '>
            <div className=" flex justify-center items-center w-full lg:w-1/2 p-2">
                <Image 
                    width={250} height={250}
                    alt=' blog just '
                    src={props.src}
                    className=' rounded-md '
                />
            </div>
            <div className="  w-[80%] lg:w-1/2 capitalize flex justify-center text-center gap-5 items-center flex-col">
                <h2 className='  sm:leading-[40px] md:leading-[55px] text-violet-500 text-[20px] lg:text-[30px] font-bold '>{props.title}</h2>
                <p className=' md:text-xl text-[14px] mb-2 leading-[55px]'>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default Blog