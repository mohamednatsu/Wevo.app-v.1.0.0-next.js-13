import Image from 'next/image'
import React from 'react'
import gif1 from './Img/1.gif'
import gif2 from './Img/5.gif'
import gif3 from './Img/6.gif'
import gif4 from './Img/4.gif'



function Features() {
    let textStyle = " mx-5 lg:text-3xl lg:p-4 text-center  lg:w-1/2 text-xl mt-7 capitalize"
    return (
        <div className='  flex  flex-col justify-around gap-20 items-center w-full'>
            <div className=" test-scroll flex lg:flex-row flex-col-reverse  justify-evenly items-center p-4 my-4">
                <div className={textStyle}>
                    <h2 className=' font-sans lg:leading-[60px] leading-10 lg:p-5  font-bold'>
                    You can design the best art from creative think and share here.
                    </h2>
                </div>
                <div className="transition-all ease-in-out hover:scale-105 delay-100 flex justify-center items-center rounded-2xl border-2 border-teal-500 shadow-lg">
                    <Image 
                        src={gif1}
                        width={400}
                        height={400}
                        className='rounded-2xl'
                    />
                </div>
            </div>
            <div className=" test-scroll flex lg:flex-row-reverse flex-col-reverse  justify-evenly items-center p-4 my-4 mt-6 lg:mt-[0px]">
                <div className={textStyle}>
                    <h2 className=' font-sans lg:leading-[60px] leading-10 lg:p-5  font-bold'>
                    search and deeping in other posts to collect more practice art.
                    </h2>
                </div>
                <div className="transition-all ease-in-out hover:scale-105 delay-100 flex justify-center items-center rounded-2xl border-2 border-violet-500 shadow-lg">
                    <Image 
                        src={gif2}
                        width={400}
                        height={400}
                        className='rounded-2xl'
                    />
                </div>
            </div>
            <div className=" test-scroll flex lg:flex-row flex-col-reverse  justify-evenly items-center p-4 my-4">
                <div className={textStyle}>
                    <h2 className='  font-sans lg:leading-[60px] leading-10 lg:p-5  font-bold'>
                    you can commint in other post to make some love with our people in wevo.
                    </h2>
                </div>
                <div className="transition-all ease-in-out hover:scale-105 delay-100 flex justify-center items-center rounded-2xl border-2 border-teal-500 shadow-lg">
                    <Image 
                        src={gif3}
                        width={400}
                        height={400}
                        className='rounded-2xl'
                    />
                </div>
            </div>
            <div className=" test-scroll flex lg:flex-row-reverse flex-col-reverse  justify-evenly items-center p-4 my-4">
                <div className={textStyle}>
                    <h2 className=' font-sans lg:leading-[60px] leading-10 lg:p-5  font-bold'>
                    not nesseciry to have labtop or desktop to share your art , now you can use mobile with the best features just for you.
                    </h2>
                </div>
                <div className=" transition-all ease-in-out hover:scale-105 delay-100 flex justify-center items-center rounded-2xl border-2 border-violet-500 shadow-lg">
                    <Image 
                        src={gif4}
                        width={400}
                        height={400}
                        className='rounded-2xl'
                    />
                </div>
            </div>
        </div>
    )
    
}

export default Features