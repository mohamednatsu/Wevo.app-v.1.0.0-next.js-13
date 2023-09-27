import React from 'react'

function MainInfo() {
    return (
        <div className=' mt-10 w-1/4 bg-violet-400 flex rounded-md h-screen flex-col shadow-md justify-around items-center'>
            <div className="">
                <div className=" w-[200px] h-[200px]  bg-black rounded-full shadow-md"></div>
            </div>
            <div className=" text-center flex flex-col gap-3">
                <h1 className=' text-3xl text-white font-bold '>Mohamed Salih</h1>
                <h2 className=' text-2xl text-white'>Statues : I am Very Fine</h2>
            </div>
        </div>
    )
}

export default MainInfo